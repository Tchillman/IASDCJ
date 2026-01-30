import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Heart, Users, ChevronRight, Play, Clock, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Congresso de Jovens 2025',
      date: '2025-01-20',
      time: '09:00',
      location: 'Centro de Convenções',
      category: 'Evento',
      description: 'Três dias de renovação espiritual, workshops e comunhão',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbmZlcmVuY2UlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjMyOTc2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Culto de Louvor e Adoração',
      date: '2025-11-27',
      time: '19:00',
      location: 'Templo Principal',
      category: 'Louvor',
      description: 'Noite especial de música e oração com grupos vocais',
      attendees: 200,
      image: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwbXVzaWMlMjBwcmFpc2V8ZW58MXx8fHwxNzYzMjk3NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Ação Social - Distribuição de Alimentos',
      date: '2025-11-30',
      time: '08:00',
      location: 'Comunidade do Sambizanga',
      category: 'Ação Social',
      description: 'Levando amor e alimento às famílias carentes',
      attendees: 80,
      image: 'https://images.unsplash.com/photo-1760992004210-44a502a2872d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyMTI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Culto: '#003A70',
      Oração: '#00C2D1',
      Evento: '#FFC145',
      Louvor: '#1E90FF',
      'Ação Social': '#FF6B6B',
      Estudo: '#27AE60',
    };
    return colors[category] || '#003A70';
  };

  const recentSermons = [
    {
      id: 1,
      title: 'A Esperança que Transforma',
      speaker: 'Pr. João Silva',
      date: '2025-11-09',
      series: 'Série: Vivendo com Esperança',
      thumbnail: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '45 min',
      views: 1234,
      type: 'video',
    },
    {
      id: 2,
      title: 'Vivendo a Fé no Dia a Dia',
      speaker: 'Pr. Maria Santos',
      date: '2025-11-02',
      series: 'Série: Fé Prática',
      thumbnail: 'https://images.unsplash.com/photo-1511551348638-75d95b7d416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIweY91dGh8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '38 min',
      views: 987,
      type: 'text',
    },
  ];

  const verseOfDay = {
    text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
    reference: 'João 3:16',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003A70] to-[#2f557f] opacity-90 z-10" />
        <ImageWithFallback
          src="/src/assets/home1.jfif"
          alt="Jovens em adoração"
          className="absolute inset-0 w-full h-full bg-center bg-auto"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Bem-vindo à Igreja Adventista
            <br />
            <span className="text-[#FFC145]">Jovem Central de Luanda</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Uma comunidade de jovens que vivem a fé através do amor, serviço e esperança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sobre">
              <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6">
                Conheça Nossa História
              </Button>
            </Link>
            <Link to="/agenda">
              <Button className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white px-8 py-6">
                Ver Agenda de Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="bg-[#E6F3FF] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#00C2D1] text-white px-4 py-2 rounded-full mb-6">
              Versículo do Dia
            </div>
            <p className="text-2xl md:text-3xl text-[#003A70] mb-4 italic">
              "{verseOfDay.text}"
            </p>
            <p className="text-[#1E90FF]">— {verseOfDay.reference}</p>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#003A70] mb-12">Acesso Rápido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/ministerios">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-t-[#00C2D1] h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <CardTitle className="text-[#003A70]">Ministérios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Conheça nossos ministérios e encontre seu lugar na comunidade
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/escola-sabatina">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-t-[#00C2D1] h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <CardTitle className="text-[#003A70]">Escola Sabatina</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estudo bíblico semanal para crescimento espiritual
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/oracao">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-t-[#00C2D1] h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <CardTitle className="text-[#003A70]">Pedidos de Oração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compartilhe suas necessidades e ore com a comunidade
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agenda">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-t-[#00C2D1] h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <CardTitle className="text-[#003A70]">Agenda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fique por dentro dos próximos eventos e atividades
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F8FA]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <Badge className="bg-[#00C2D1]/10 text-[#00C2D1] border-0 px-4 py-2 mb-4">
                Agenda
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#003A70] mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Junte-se a nós nos momentos que transformam vidas e fortalecem nossa comunidade
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFC145] to-[#00C2D1] mx-auto rounded-full"></div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl transform hover:-translate-y-2">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Imagem do Evento */}
                    <div className="relative md:col-span-2 h-72 md:h-auto overflow-hidden">
                      {/* Gradiente superior para melhor legibilidade */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent z-10" />
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                      />
                      
                      {/* Badge de Categoria com animação */}
                      <Badge
                        className="absolute top-5 right-5 text-white shadow-2xl border-0 px-5 py-2.5 z-20 backdrop-blur-md text-sm group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundColor: `${getCategoryColor(event.category)}ee`,
                        }}
                      >
                        {event.category}
                      </Badge>
                      
                      {/* Data destacada com efeito glassmorphism */}
                      <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 z-20 text-center min-w-[80px] group-hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl text-[#003A70]">
                          {new Date(event.date).toLocaleDateString('pt-PT', { day: 'numeric' })}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                          {new Date(event.date).toLocaleDateString('pt-PT', { month: 'short' })}
                        </div>
                        <div className="text-xs text-[#00C2D1] mt-1">
                          {new Date(event.date).getFullYear()}
                        </div>
                      </div>

                      {/* Indicador visual de hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    </div>

                    {/* Conteúdo do Evento */}
                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/30">
                      <div>
                        <h3 className="text-3xl md:text-4xl text-[#003A70] mb-4 group-hover:text-[#1E90FF] transition-colors duration-300 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                          {event.description}
                        </p>
                        
                        {/* Informações com cards individuais */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C2D1] to-[#00D4E3] flex items-center justify-center shadow-md flex-shrink-0">
                              <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Horário</p>
                              <p className="text-sm text-[#003A70]">{event.time}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC145] to-[#FFDA5A] flex items-center justify-center shadow-md flex-shrink-0">
                              <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Local</p>
                              <p className="text-sm text-[#003A70] truncate">{event.location}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                              style={{ background: `linear-gradient(135deg, ${getCategoryColor(event.category)}, ${getCategoryColor(event.category)}dd)` }}
                            >
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Vagas</p>
                              <p className="text-sm text-[#003A70]">{event.attendees}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Botão de Ação Redesenhado */}
                      <Link to="/agenda" className="block">
                        <Button
                          className="w-full md:w-auto text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-7 text-base group/btn relative overflow-hidden"
                          style={{ 
                            background: `linear-gradient(135deg, ${getCategoryColor(event.category)}, ${getCategoryColor(event.category)}dd)`
                          }}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Inscrever-se Agora
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                          {/* Efeito de brilho no hover */}
                          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA para ver todos */}
          <div className="text-center mt-12">
            <Link to="/agenda">
              <Button 
                variant="outline" 
                className="text-[#1E90FF] border-2 border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white px-8 py-6 text-base transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                Ver Todos os Eventos
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Animação CSS */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[#003A70]">Mensagens Recentes</h2>
            <Link
              to="/sermoes"
              className="text-[#1E90FF] hover:text-[#4DA6FF] flex items-center gap-1"
            >
              Ver todas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
                <div className="relative h-64 group cursor-pointer overflow-hidden">
                  <ImageWithFallback
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#FFC145] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#003A70] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm backdrop-blur-sm">
                    {sermon.duration}
                  </div>
                  <div className="absolute top-3 left-3 right-3">
                    <Badge className="bg-[#00C2D1] text-white border-0 shadow-md px-3 py-1.5 text-xs">{sermon.series}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-3 flex-grow">
                  <CardTitle className="text-[#003A70] group-hover:text-[#1E90FF] transition-colors leading-tight text-xl mb-3">{sermon.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium">{sermon.speaker}</span>
                      <span className="text-gray-400">{new Date(sermon.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <p className="text-sm text-gray-400">{sermon.views.toLocaleString('pt-PT')} visualizações</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  {sermon.type === 'video' ? (
                    <Button className="w-full bg-[#1E90FF] hover:bg-[#4DA6FF] text-white shadow-md">
                      <Play className="w-4 h-4 mr-2" />
                      Assistir
                    </Button>
                  ) : (
                    <Button className="w-full bg-[#00C2D1] hover:bg-[#00D4E3] text-white shadow-md">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ler
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Junte-se a Nós!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Seja parte de uma comunidade vibrante de jovens que buscam crescer na fé e fazer a diferença no mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6">
                Entre em Contato
              </Button>
            </Link>
            <Link to="/contribuir">
              <Button className="bg-white hover:bg-gray-100 text-[#003A70] px-8 py-6">
                Contribua com a Igreja
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}