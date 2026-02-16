import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Heart, Send, Loader2, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { toast } from 'sonner';
import api from '../../lib/api';

// Zod v4 validation schema
const prayerRequestSchema = z.object({
  name: z.string().max(255, 'Nome muito longo').trim(),
  request: z.string().min(1, 'Por favor, descreva seu pedido de oração'),
  privacy: z.enum(['public', 'private']),
}).refine((data) => {
  if (data.privacy === 'public') {
    return data.name.length > 0;
  }
  return true;
}, {
  message: 'Nome é obrigatório',
  path: ['name'],
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

interface PrayerRequest {
  id: number;
  name: string;
  request: string;
  privacy: 'public' | 'private';
  prayers: number;
  createdAt: string;
  updatedAt: string | null;
}

interface PrayersResponse {
  data: PrayerRequest[];
  meta: {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
  };
}

export function PedidosOracao() {
  const [prayers, setPrayers] = useState<PrayerRequest[]>([]);
  const [isLoadingPrayers, setIsLoadingPrayers] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prayingFor, setPrayingFor] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      name: '',
      request: '',
      privacy: 'public',
    },
  });

  const selectedPrivacy = watch('privacy');
  const isPrivate = selectedPrivacy === 'private';

  // Quando mudar privacidade, ajustar o campo nome
  useEffect(() => {
    if (isPrivate) {
      setValue('name', 'Anônimo');
    } else {
      setValue('name', '');
    }
  }, [isPrivate, setValue]);

  // Fetch public prayers
  const fetchPrayers = async (page: number = 1) => {
    setIsLoadingPrayers(true);
    try {
      const response = await api.get<PrayersResponse>(`/oracoes?page=${page}&limit=4`);
      setPrayers(response.data.data);
      setCurrentPage(response.data.meta.currentPage);
      setTotalPages(response.data.meta.lastPage);
    } catch (error) {
      console.error('Erro ao carregar pedidos de oração:', error);
      toast.error('Não foi possível carregar os pedidos de oração');
    } finally {
      setIsLoadingPrayers(false);
    }
  };

  useEffect(() => {
    fetchPrayers(1);
  }, []);

  // Submit new prayer request
  const onSubmit = async (data: PrayerRequestFormData) => {
    setIsSubmitting(true);
    try {
      await api.post('/oracoes', {
        name: data.privacy === 'private' ? 'Anônimo' : data.name.trim(),
        request: data.request.trim(),
        privacy: data.privacy,
      });

      toast.success(
        data.privacy === 'public'
          ? 'Pedido de oração enviado! Agora está visível para a comunidade orar por você.'
          : 'Pedido de oração enviado! Nossa liderança orará por você.'
      );

      reset();

      // Refresh public prayers list
      if (data.privacy === 'public') {
        fetchPrayers(1);
      }
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      toast.error('Não foi possível enviar seu pedido. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Increment prayer count
  const handlePray = async (prayerId: number) => {
    setPrayingFor(prayerId);
    try {
      await api.post(`/oracoes/${prayerId}/orar`);

      // Update local state with animation
      setPrayers((prevPrayers) =>
        prevPrayers.map((prayer) =>
          prayer.id === prayerId
            ? { ...prayer, prayers: prayer.prayers + 1 }
            : prayer
        )
      );

      toast.success('Sua oração foi registrada! Que Deus abençoe.');
    } catch (error) {
      console.error('Erro ao registrar oração:', error);
      toast.error('Não foi possível registrar sua oração. Tente novamente.'+error);
    } finally {
      setPrayingFor(null);
    }
  };

  // Load more prayers
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      fetchPrayers(currentPage + 1);
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-white">Pedidos de Oração</h1>
          <p className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto">
            "Confessai as vossas culpas uns aos outros e orai uns pelos outros, para que sareis." - Tiago 5:16
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#003A70] mb-4 md:mb-6">Compartilhe seu Pedido</h2>
            <Card className="shadow-md border border-gray-100">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-7">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold mt-4 text-[#003A70]">
                      Nome {!isPrivate && <span className="text-red-500">*</span>}
                    </Label>
                    <Input
                      id="name"
                      placeholder={isPrivate ? 'Anônimo' : 'Seu nome'}
                      readOnly={isPrivate}
                      {...register('name')}
                      className={`h-12 px-4 rounded-lg border-2 transition-colors focus:bg-white focus:border-[#1E90FF] ${
                        isPrivate
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : errors.name
                            ? 'border-red-500 bg-red-50'
                            : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                 

                  <div className="space-y-2">
                    <Label htmlFor="request" className="text-sm font-semibold mt-4 text-[#003A70]">
                      Pedido de Oração <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="request"
                      placeholder="Descreva como podemos orar por você..."
                      rows={5}
                      {...register('request')}
                      style={{ height: '128px' }}
                      className={`px-5 py-3 rounded-lg border-2 bg-gray-50 transition-colors focus:bg-white resize-none ${errors.request ? 'border-red-500 bg-red-50' : 'border-gray-100'}`}
                    />
                    {errors.request && (
                      <p className="text-red-500 text-xs mt-1">{errors.request.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold mt-4 text-[#003A70] block">
                      Privacidade <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={selectedPrivacy}
                      onValueChange={(value:string) => setValue('privacy', value as 'public' | 'private')}
                      className="space-y-3"
                    >
                      <label
                        htmlFor="public"
                        className={`flex items-center gap-3 p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPrivacy === 'public'
                            ? 'border-[#1E90FF] bg-[#E6F3FF]'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <RadioGroupItem value="public" id="public" />
                        <div>
                          <span className="font-medium text-[#003A70]">Público</span>
                          <p className="text-xs text-gray-500 mt-0.5">Visível para toda a comunidade</p>
                        </div>
                      </label>
                      <label
                        htmlFor="private"
                        className={`flex items-center gap-3 p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPrivacy === 'private'
                            ? 'border-[#1E90FF] bg-[#E6F3FF]'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <RadioGroupItem value="private" id="private" />
                        <div>
                          <span className="font-medium text-[#003A70]">Privado</span>
                          <p className="text-xs text-gray-500 mt-0.5">Apenas a liderança verá</p>
                        </div>
                      </label>
                    </RadioGroup>
                    <div className="flex items-start gap-2 bg-[#E6F3FF] mb-4 p-3 rounded-lg border border-[#B3D9FF]">
                      <span className="text-[#1E90FF] text-sm mt-0.5">i</span>
                      <p className="text-sm text-[#003A70]/70">
                        {selectedPrivacy === 'public'
                          ? 'Seu pedido será compartilhado com a comunidade para que todos possam orar junto com você.'
                          : 'Seu pedido será mantido confidencial e compartilhado apenas com a liderança da igreja.'}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12  text-base font-semibold bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Pedido
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Public Prayers List Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-[#003A70] mb-6">Ore pela Comunidade</h2>

            {isLoadingPrayers ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                      <div className="h-16 bg-gray-200 rounded mb-4"></div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-9 bg-gray-200 rounded w-28"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : prayers.length === 0 ? (
              <Card className="text-center py-16 border border-gray-100">
                <CardContent>
                  <div className="w-20 h-20 bg-[#E6F3FF] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-10 h-10 text-[#1E90FF] opacity-60" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#003A70] mb-2">Nenhum pedido público ainda</h3>
                  <p className="text-gray-500 text-sm">
                    Seja o primeiro a compartilhar um pedido de oração com a comunidade.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col min-h-0 flex-1">
                <div className="overflow-y-auto max-h-[600px] space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {prayers.map((prayer) => (
                    <Card
                      key={prayer.id}
                      className="hover:shadow-lg transition-all border border-gray-100"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#E6F3FF] to-[#B3D9FF] rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-[#1E90FF]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-[#003A70] font-semibold text-base">{prayer.name}</h3>
                            <p className="text-gray-600 mt-2 leading-relaxed text-sm">{prayer.request}</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{formatDate(prayer.createdAt)}</span>
                          </div>

                          <Button
                            onClick={() => handlePray(prayer.id)}
                            disabled={prayingFor === prayer.id}
                            className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white rounded-full px-5 shadow-sm hover:shadow-md transition-all"
                            size="sm"
                          >
                            {prayingFor === prayer.id ? (
                              <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                            ) : (
                              <Heart className="w-4 h-4 mr-1.5" />
                            )}
                            Eu orei ({prayer.prayers})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination / Load More */}
                {currentPage < totalPages && (
                  <div className="pt-4 mt-2">
                    <Button
                      onClick={handleLoadMore}
                      variant="outline"
                      className="w-full h-11 border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F3FF] rounded-lg font-medium transition-all"
                    >
                      Carregar mais pedidos
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Bible Verse Section */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white border-none">
            <CardHeader>
              <CardTitle className="text-center text-2xl">O Poder da Oração</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-4">
                "E esta é a confiança que temos nele: que, se pedirmos alguma coisa segundo a sua vontade, ele nos ouve."
              </p>
              <p className="text-[#4DA6FF] font-semibold">- 1 João 5:14</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
