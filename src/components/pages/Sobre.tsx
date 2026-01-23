import { Heart, Target, Eye, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function Sobre() {
  const leaders = [
    {
      name: 'Pr. João Silva',
      role: 'Pastor Principal',
      image: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Maria Santos',
      role: 'Líder de Jovens',
      image: 'https://images.unsplash.com/photo-1511551348638-75d95b7d416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIweW91dGh8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Pedro Costa',
      role: 'Diretor de Música',
      image: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Ana Ferreira',
      role: 'Escola Sabatina',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGV8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#003A70] opacity-90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762474343462-fbb221e36c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzI5MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Comunidade da igreja"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Sobre Nós</h1>
          <p className="text-xl text-gray-100">Conheça nossa história, missão e valores</p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#003A70] mb-6 text-center">Nossa História</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                A Igreja Adventista Jovem Central de Luanda nasceu do desejo de criar um espaço
                acolhedor onde jovens pudessem crescer espiritualmente, desenvolver seus talentos
                e servir à comunidade com amor e dedicação.
              </p>
              <p className="text-gray-700 mb-4">
                Fundada em 2010, nossa comunidade tem crescido constantemente, impactando centenas
                de vidas através de programas de evangelismo, ação social, música e estudos bíblicos.
                Somos parte da Igreja Adventista do Sétimo Dia, uma denominação cristã mundial presente
                em mais de 200 países.
              </p>
              <p className="text-gray-700">
                Hoje, somos uma comunidade vibrante de mais de 500 jovens que se reúnem semanalmente
                para adoração, estudo da Palavra de Deus e comunhão. Nossa missão é ser sal e luz,
                levando esperança e transformação para Luanda e além.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-12 text-center">Missão, Visão e Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-[#00C2D1]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E6F3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#1E90FF]" />
                </div>
                <CardTitle className="text-[#003A70] text-center">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Fazer discípulos de Cristo entre os jovens de Luanda, equipando-os para viver
                  uma fé autêntica e transformar suas comunidades através do amor e serviço.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#FFC145]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FFF4E0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-[#FFC145]" />
                </div>
                <CardTitle className="text-[#003A70] text-center">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ser uma referência de comunidade jovem cristã em Luanda, conhecida pelo amor,
                  excelência e impacto social, preparando jovens para a volta de Jesus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#1E90FF]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E6F3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#1E90FF]" />
                </div>
                <CardTitle className="text-[#003A70] text-center">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Amor a Deus e ao próximo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Integridade e autenticidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Excelência em tudo que fazemos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Serviço à comunidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Estudo da Palavra de Deus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-12 text-center">Nossa Liderança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#003A70]">{leader.name}</CardTitle>
                  <p className="text-[#1E90FF]">{leader.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crenças Fundamentais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#003A70] mb-8 text-center">Nossas Crenças</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Bíblia Sagrada</h3>
                  <p className="text-gray-600">
                    Cremos que a Bíblia é a Palavra inspirada de Deus e nossa única regra de fé e prática.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Trindade</h3>
                  <p className="text-gray-600">
                    Cremos em um Deus: Pai, Filho e Espírito Santo, uma unidade de três Pessoas coeternas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Salvação pela Graça</h3>
                  <p className="text-gray-600">
                    Cremos que a salvação é um dom gratuito de Deus, mediante a fé em Jesus Cristo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Segunda Vinda de Cristo</h3>
                  <p className="text-gray-600">
                    Cremos na breve volta pessoal e visível de Jesus Cristo em glória.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Sábado</h3>
                  <p className="text-gray-600">
                    Cremos que o sábado (sétimo dia) é o dia de repouso instituído por Deus na criação.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#003A70] mb-2">Saúde Integral</h3>
                  <p className="text-gray-600">
                    Cremos que nosso corpo é templo do Espírito Santo e deve ser cuidado com zelo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
