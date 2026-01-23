import { Users, Music, BookOpen, Heart, Radio, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Ministerios() {
  const ministries = [
    {
      id: 'jovens',
      title: 'Jovens',
      icon: Users,
      color: '#00C2D1',
      description: 'Programas e atividades voltados para o crescimento espiritual e social dos jovens.',
      image: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Reuniões semanais de jovens',
        'Grupos de estudo bíblico',
        'Eventos sociais e recreativos',
        'Projetos de evangelismo',
      ],
    },
    {
      id: 'musica',
      title: 'Música',
      icon: Music,
      color: '#FFC145',
      description: 'Coral, grupos vocais e instrumentais que ministram através da música.',
      image: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Ensaios do coral - Quintas 19h',
        'Grupo de louvor juvenil',
        'Aulas de instrumentos musicais',
        'Apresentações especiais',
      ],
    },
    {
      id: 'escola-sabatina',
      title: 'Escola Sabatina',
      icon: BookOpen,
      color: '#1E90FF',
      description: 'Estudo sistemático da Bíblia aos sábados pela manhã.',
      image: 'https://images.unsplash.com/photo-1511551348638-75d95b7d416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIweW91dGh8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Classes para todas as idades',
        'Lições trimestrais',
        'Discussões em grupos pequenos',
        'Materiais de estudo disponíveis',
      ],
    },
    {
      id: 'acao-missionaria',
      title: 'Ação Missionária',
      icon: Heart,
      color: '#FF6B6B',
      description: 'Projetos de evangelismo e serviço à comunidade.',
      image: 'https://images.unsplash.com/photo-1762474343462-fbb221e36c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzI5MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Distribuição de alimentos',
        'Visitas a hospitais e lares',
        'Evangelismo público',
        'Estudos bíblicos na comunidade',
      ],
    },
    {
      id: 'comunicacao',
      title: 'Comunicação',
      icon: Radio,
      color: '#9B59B6',
      description: 'Divulgação das atividades da igreja através de diversos canais.',
      image: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Gestão de redes sociais',
        'Produção de vídeos',
        'Design gráfico',
        'Transmissões ao vivo',
      ],
    },
    {
      id: 'saude',
      title: 'Saúde',
      icon: Activity,
      color: '#27AE60',
      description: 'Promoção da saúde física, mental e espiritual.',
      image: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Palestras sobre vida saudável',
        'Grupos de caminhada',
        'Cursos de culinária saudável',
        'Apoio psicológico e espiritual',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Ministérios</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Descubra como você pode servir e crescer através de nossos diversos ministérios
          </p>
        </div>
      </section>

      {/* Ministérios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={ministry.id}
                  id={ministry.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center scroll-mt-20`}
                >
                  {/* Imagem */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src={ministry.image}
                        alt={ministry.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute top-4 left-4 w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: ministry.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className="inline-block px-4 py-2 rounded-full text-white mb-4"
                      style={{ backgroundColor: ministry.color }}
                    >
                      Ministério
                    </div>
                    <h2 className="text-[#003A70] mb-4">{ministry.title}</h2>
                    <p className="text-gray-700 mb-6 text-lg">{ministry.description}</p>
                    <Card className="bg-[#F5F8FA] border-none">
                      <CardHeader>
                        <CardTitle className="text-[#003A70]">Atividades</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {ministry.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: ministry.color }}
                              />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Button
                      className="mt-6 hover:bg-[#4DA6FF]"
                      style={{ backgroundColor: ministry.color }}
                    >
                      Quero Participar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Encontre Seu Lugar</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Cada pessoa tem dons únicos. Venha descobrir como você pode fazer a diferença através
            de nossos ministérios.
          </p>
          <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6">
            Entre em Contato
          </Button>
        </div>
      </section>
    </div>
  );
}
