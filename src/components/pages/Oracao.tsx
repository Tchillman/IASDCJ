import { useState } from 'react';
import { Heart, Send, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export function Oracao() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    privacy: 'public',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui será integrado com backend
    alert('Seu pedido de oração foi enviado com sucesso!');
  };

  const prayerRequests = [
    {
      id: 1,
      name: 'João S.',
      request: 'Peço oração pela saúde da minha mãe que está hospitalizada.',
      date: '2025-11-15',
      prayers: 45,
    },
    {
      id: 2,
      name: 'Maria C.',
      request: 'Agradeço a Deus pelas bênçãos recebidas e peço sabedoria para nova fase profissional.',
      date: '2025-11-14',
      prayers: 32,
    },
    {
      id: 3,
      name: 'Pedro M.',
      request: 'Oração pela reconciliação familiar e paz no lar.',
      date: '2025-11-13',
      prayers: 28,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Pedidos de Oração</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Compartilhe suas necessidades e ore com nossa comunidade
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003A70] flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#00C2D1]" />
                  Envie Seu Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="request">Pedido de Oração</Label>
                    <Textarea
                      id="request"
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      placeholder="Compartilhe seu pedido..."
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label>Privacidade</Label>
                    <RadioGroup
                      value={formData.privacy}
                      onValueChange={(value) => setFormData({ ...formData, privacy: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="public" id="public" />
                        <Label htmlFor="public" className="cursor-pointer">
                          Público - Compartilhar com a comunidade
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="private" id="private" />
                        <Label htmlFor="private" className="cursor-pointer flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Privado - Apenas para liderança da igreja
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Pedido
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações */}
            <Card className="mt-6 bg-[#E6F3FF] border-none">
              <CardContent className="pt-6">
                <h3 className="text-[#003A70] mb-4">Como Funciona</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Pedidos públicos são compartilhados com a comunidade para oração coletiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Pedidos privados são vistos apenas pela liderança pastoral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Oramos semanalmente por todos os pedidos nas reuniões de oração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Você receberá apoio espiritual da nossa equipe pastoral</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Pedidos Públicos */}
          <div>
            <h2 className="text-[#003A70] mb-6">Pedidos Recentes</h2>
            <div className="space-y-4">
              {prayerRequests.map((prayer) => (
                <Card key={prayer.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[#003A70]">{prayer.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(prayer.date).toLocaleDateString('pt-PT')}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#00C2D1]">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{prayer.prayers}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{prayer.request}</p>
                    <Button
                      variant="outline"
                      className="text-[#1E90FF] border-[#1E90FF] hover:bg-[#E6F3FF]"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Orar por isto
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Reuniões de Oração</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Junte-se a nós todas as quartas-feiras às 19h para momentos de intercessão e comunhão
          </p>
          <Button className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white px-8 py-6">
            Participar da Reunião
          </Button>
        </div>
      </section>
    </div>
  );
}
