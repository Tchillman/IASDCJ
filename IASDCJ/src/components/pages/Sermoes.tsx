import { Play, Share2, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

export function Sermoes() {
  const [selectedSeries, setSelectedSeries] = useState('Todos');

  const sermons = [
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
      type: 'video',
    },
    {
      id: 3,
      title: 'O Amor de Deus sem Limites',
      speaker: 'Pr. Pedro Costa',
      date: '2025-10-26',
      series: 'Série: O Caráter de Deus',
      thumbnail: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '42 min',
      views: 1456,
      type: 'text',
    },
    {
      id: 4,
      title: 'Preparados para a Volta de Jesus',
      speaker: 'Pr. João Silva',
      date: '2025-10-19',
      series: 'Série: Sinais dos Tempos',
      thumbnail: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGV8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '50 min',
      views: 2103,
      type: 'video',
    },
    {
      id: 5,
      title: 'O Poder da Oração',
      speaker: 'Pr. Ana Ferreira',
      date: '2025-10-12',
      series: 'Série: Vida de Oração',
      thumbnail: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '35 min',
      views: 876,
      type: 'video',
    },
    {
      id: 6,
      title: 'Jovens com Propósito',
      speaker: 'Pr. Maria Santos',
      date: '2025-10-05',
      series: 'Série: Chamado para Servir',
      thumbnail: 'https://images.unsplash.com/photo-1762474343462-fbb221e36c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzI5MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '40 min',
      views: 1567,
      type: 'text',
    },
  ];

  const series = [
    'Vivendo com Esperança',
    'Fé Prática',
    'O Caráter de Deus',
    'Sinais dos Tempos',
    'Vida de Oração',
    'Chamado para Servir',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Sermões e Mensagens</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Assista ou ouça mensagens que edificam, inspiram e transformam vidas
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Badge 
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedSeries === 'Todos'
                  ? 'bg-[#003A70] text-white hover:bg-[#004A90]'
                  : 'bg-white text-[#003A70] border border-[#003A70] hover:bg-[#E6F3FF]'
              }`}
              onClick={() => setSelectedSeries('Todos')}
            >
              Todos
            </Badge>
            {series.map((s, index) => (
              <Badge
                key={index}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  selectedSeries === s
                    ? 'bg-[#003A70] text-white hover:bg-[#004A90]'
                    : 'bg-white text-[#003A70] border border-[#003A70] hover:bg-[#E6F3FF]'
                }`}
                onClick={() => setSelectedSeries(s)}
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Sermões */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons
              .filter(sermon => selectedSeries === 'Todos' || sermon.series === `Série: ${selectedSeries}`)
              .map((sermon) => (
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
                  {sermon.type === 'video' && (
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-[#1E90FF] hover:bg-[#4DA6FF] text-white shadow-md">
                        <Play className="w-4 h-4 mr-2" />
                        Assistir
                      </Button>
                      <Button variant="outline" className="text-[#003A70] hover:bg-[#E6F3FF] border-gray-200">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  {sermon.type === 'text' && (
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-[#00C2D1] hover:bg-[#00D4E3] text-white shadow-md">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Ler
                      </Button>
                      <Button variant="outline" className="text-[#003A70] hover:bg-[#E6F3FF] border-gray-200">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  {sermon.type === 'both' && (
                    <div className="space-y-2">
                      <Button className="w-full bg-[#1E90FF] hover:bg-[#4DA6FF] text-white shadow-md">
                        <Play className="w-4 h-4 mr-2" />
                        Assistir
                      </Button>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-[#00C2D1] hover:bg-[#00D4E3] text-white shadow-md">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Ler
                        </Button>
                        <Button variant="outline" className="text-[#003A70] hover:bg-[#E6F3FF] border-gray-200">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Canal YouTube */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Siga Nosso Canal no YouTube</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscreva-se para receber notificações de novas mensagens e transmissões ao vivo
          </p>
          <Button className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 py-6">
            Inscrever-se no YouTube
          </Button>
        </div>
      </section>
    </div>
  );
}