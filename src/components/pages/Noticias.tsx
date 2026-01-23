import { Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useState } from 'react';

export function Noticias() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const news = [
    {
      id: 1,
      title: 'Congresso de Jovens 2025: Inscrições Abertas',
      category: 'Evento',
      date: '2025-11-15',
      image: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Participe do maior evento jovem do ano! Três dias de renovação espiritual com pregadores internacionais, workshops e muito louvor.',
    },
    {
      id: 2,
      title: 'Campanha de Arrecadação de Alimentos foi um Sucesso',
      category: 'Ação Social',
      date: '2025-11-12',
      image: 'https://images.unsplash.com/photo-1762474343462-fbb221e36c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzI5MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Mais de 200 famílias foram beneficiadas pela nossa campanha de arrecadação de alimentos. Agradecemos a todos que participaram!',
    },
    {
      id: 3,
      title: 'Novo Programa de Mentoria para Jovens',
      category: 'Ministério',
      date: '2025-11-08',
      image: 'https://images.unsplash.com/photo-1511551348638-75d95b7d416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIweW91dGh8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Lançamos um programa de mentoria espiritual conectando jovens com membros experientes da igreja para crescimento mútuo.',
    },
    {
      id: 4,
      title: 'Culto Especial de Louvor e Adoração',
      category: 'Culto',
      date: '2025-11-05',
      image: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Noite inesquecível de adoração reuniu centenas de jovens em uma atmosfera de louvor e presença de Deus.',
    },
    {
      id: 5,
      title: 'Semana de Oração - Programação Divulgada',
      category: 'Comunicado',
      date: '2025-11-01',
      image: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Confira a programação completa da Semana de Oração que acontecerá de 20 a 27 de janeiro. Momentos especiais de renovação espiritual.',
    },
    {
      id: 6,
      title: 'Batismo: Celebrando Novas Vidas em Cristo',
      category: 'Celebração',
      date: '2025-10-28',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGV8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: '15 jovens foram batizados no último sábado, marcando um novo capítulo em suas vidas de fé. Louvado seja Deus!',
    },
  ];

  const categories = ['Todos', 'Evento', 'Ação Social', 'Ministério', 'Culto', 'Comunicado', 'Celebração'];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Evento: '#FFC145',
      'Ação Social': '#FF6B6B',
      Ministério: '#00C2D1',
      Culto: '#1E90FF',
      Comunicado: '#9B59B6',
      Celebração: '#27AE60',
    };
    return colors[category] || '#003A70';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Notícias e Comunicados</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Fique atualizado com as últimas novidades da nossa comunidade
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#003A70] text-white hover:bg-[#004A90]'
                    : 'bg-white text-[#003A70] border border-[#003A70] hover:bg-[#E6F3FF]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Notícias em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news
              .filter((item) => selectedCategory === 'Todos' || item.category === selectedCategory)
              .map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Badge
                      className="absolute top-4 left-4 text-white shadow-md border-0 px-3 py-1.5"
                      style={{ backgroundColor: getCategoryColor(item.category) }}
                    >
                      <Tag className="w-3 h-3 mr-1.5" />
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-[#003A70] group-hover:text-[#1E90FF] transition-colors leading-tight">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
                      <Calendar className="w-4 h-4 text-[#00C2D1]" />
                      <span>
                        {new Date(item.date).toLocaleDateString('pt-PT', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Receba Nossas Notícias</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e fique por dentro de todas as novidades e eventos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            />
            <button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-3 rounded-lg transition-colors">
              Inscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}