import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function Agenda() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [visibleUpcoming, setVisibleUpcoming] = useState(6);
  const [visibleWeekly, setVisibleWeekly] = useState(6);

  const events = [
    {
      id: 1,
      title: 'Culto Divino',
      date: '2025-11-23',
      time: '10:30',
      location: 'Templo Principal',
      category: 'Culto',
      description: 'Culto de adoração com a presença do Pr. João Silva',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1662151900393-97f6bc1567ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwc2VydmljZXxlbnwxfHx8fDE3NjMyMDQ1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Reunião de Oração',
      date: '2025-11-20',
      time: '19:00',
      location: 'Sala de Oração',
      category: 'Oração',
      description: 'Momento de intercessão e comunhão',
      attendees: 50,
      image: 'https://images.unsplash.com/photo-1652207069570-8307e991d3e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kcyUyMGNhbmRsZXxlbnwxfHx8fDE3NjMyOTczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Congresso de Jovens 2025',
      date: '2025-01-20',
      time: '09:00',
      location: 'Centro de Convenções',
      category: 'Evento',
      description: 'Três dias de renovação espiritual, workshops e comunhão',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1617196288062-49bf97a38d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjMyOTczMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Culto de Louvor e Adoração',
      date: '2025-11-27',
      time: '19:00',
      location: 'Templo Principal',
      category: 'Louvor',
      description: 'Noite especial de música e oração com grupos vocais',
      attendees: 200,
      image: 'https://images.unsplash.com/photo-1583869153539-251655e329de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwbXVzaWMlMjBjb25jZXJ0fGVufDF8fHx8MTc2MzI5NzMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Ação Social - Distribuição de Alimentos',
      date: '2025-11-30',
      time: '08:00',
      location: 'Comunidade do Sambizanga',
      category: 'Ação Social',
      description: 'Levando amor e alimento às famílias carentes',
      attendees: 80,
      image: 'https://images.unsplash.com/photo-1673280401347-309363111070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwZm9vZHxlbnwxfHx8fDE3NjMyOTczMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Escola Sabatina',
      date: '2025-11-23',
      time: '09:00',
      location: 'Salas de Estudo',
      category: 'Estudo',
      description: 'Estudo bíblico em classes divididas por faixa etária',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYzMjkwNDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
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

  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const upcomingEvents = sortedEvents.filter(
    event => new Date(event.date) >= new Date()
  );

  const weeklyProgram = [
    {
      id: 1,
      title: 'Escola Sabatina',
      day: 'Sáb',
      time: '09:00 - 10:00',
      location: 'Salas de Estudo',
      category: 'Estudo',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1670313860114-7c40617eaf0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWJiYXRoJTIwc2Nob29sJTIwYmlibGUlMjBzdHVkeXxlbnwxfHx8fDE3NjMyOTc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Culto Divino',
      day: 'Sáb',
      time: '10:30 - 12:00',
      location: 'Templo Principal',
      category: 'Culto',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1662151900393-97f6bc1567ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwc2VydmljZXxlbnwxfHx8fDE3NjMyMDQ1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Programa de Jovens',
      day: 'Sáb',
      time: '16:00 - 18:00',
      location: 'Salão de Eventos',
      category: 'Evento',
      attendees: 100,
      image: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHByb2dyYW0lMjBjaHVyY2h8ZW58MXx8fHwxNjMyOTc4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Reunião de Oração',
      day: 'Qua',
      time: '19:00 - 20:30',
      location: 'Sala de Oração',
      category: 'Oração',
      attendees: 50,
      image: 'https://images.unsplash.com/photo-1623096939009-cb651b7700f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwcmF5ZXIlMjBtZWV0aW5nfGVufDF8fHx8MTc2MzI5NzgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Ensaio do Coral',
      day: 'Dom',
      time: '15:00 - 17:00',
      location: 'Templo Principal',
      category: 'Louvor',
      attendees: 30,
      image: 'https://images.unsplash.com/photo-1746169801389-51290391a548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9pciUyMHJlaGVhcnNhbCUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjk3ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Agenda de Eventos</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Fique por dentro de todas as atividades e programações da igreja
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, visibleUpcoming).map((event) => (
              <Card key={event.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
                <div className="relative h-64 group cursor-pointer overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm backdrop-blur-sm">
                    {event.time}
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge 
                      className="text-white border-0 shadow-md px-3 py-1.5 text-xs"
                      style={{ backgroundColor: getCategoryColor(event.category) }}
                    >
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white rounded-lg shadow-xl px-3 py-2 text-center">
                    <div className="text-lg text-[#003A70]">
                      {new Date(event.date).toLocaleDateString('pt-PT', { day: 'numeric' })}
                    </div>
                    <div className="text-xs text-gray-600 uppercase">
                      {new Date(event.date).toLocaleDateString('pt-PT', { month: 'short' })}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3 flex-grow">
                  <CardTitle className="text-[#003A70] group-hover:text-[#1E90FF] transition-colors leading-tight text-xl mb-3">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#00C2D1]" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" style={{ color: getCategoryColor(event.category) }} />
                      <span>{event.attendees} participantes</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <Button 
                    className="w-full text-white shadow-md"
                    style={{ 
                      backgroundColor: getCategoryColor(event.category),
                    }}
                    onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const color = getCategoryColor(event.category);
                      e.currentTarget.style.backgroundColor = color + 'dd';
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = getCategoryColor(event.category);
                    }}
                  >
                    Inscrever-se
                  </Button>
                </CardContent>
              </Card>
            ))}
            {upcomingEvents.length > visibleUpcoming && (
              <div className="col-span-full text-center">
                <Button
                  className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6"
                  onClick={() => setVisibleUpcoming(visibleUpcoming + 3)}
                >
                  Ver Mais
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Programação Semanal */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8">Programação Semanal Regular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyProgram.map((event) => (
              <Card key={event.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
                <div className="relative h-64 group cursor-pointer overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm backdrop-blur-sm">
                    {event.time}
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge 
                      className="text-white border-0 shadow-md px-3 py-1.5 text-xs"
                      style={{ backgroundColor: getCategoryColor(event.category) }}
                    >
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white rounded-lg shadow-xl px-3 py-2 text-center">
                    <div className="text-lg text-[#003A70]">
                      {event.day}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3 flex-grow">
                  <CardTitle className="text-[#003A70] group-hover:text-[#1E90FF] transition-colors leading-tight text-xl mb-3">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#00C2D1]" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" style={{ color: getCategoryColor(event.category) }} />
                      <span>{event.attendees} participantes</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <Button 
                    className="w-full text-white shadow-md"
                    style={{ 
                      backgroundColor: getCategoryColor(event.category),
                    }}
                    onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const color = getCategoryColor(event.category);
                      e.currentTarget.style.backgroundColor = color + 'dd';
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = getCategoryColor(event.category);
                    }}
                  >
                    Participar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Não Perca Nenhum Evento</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter para receber atualizações sobre eventos e atividades
          </p>
          <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6">
            Receber Notificações
          </Button>
        </div>
      </section>
    </div>
  );
}