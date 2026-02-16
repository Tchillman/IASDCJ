import { BookOpen, Download, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function EscolaSabatina() {
  const currentLesson = {
    quarter: '4º Trimestre 2025',
    theme: 'O Evangelho de João',
    week: 8,
    title: 'Sinais, Obras e Maravilhas',
    memory: 'João 20:30-31',
    date: '16-23 de Novembro',
  };

  const classes = [
    {
      name: 'Adolescentes (13-17 anos)',
      time: '09:00',
      room: 'Sala 1',
      teacher: 'Prof. Ana Ferreira',
    },
    {
      name: 'Jovens (18-35 anos)',
      time: '09:00',
      room: 'Sala 2',
      teacher: 'Prof. Pedro Costa',
    },
    {
      name: 'Adultos (36+ anos)',
      time: '09:00',
      room: 'Sala 3',
      teacher: 'Prof. Maria Santos',
    },
  ];

  const weeklyStudy = [
    { day: 'Domingo', topic: 'Prólogo: No princípio' },
    { day: 'Segunda', topic: 'O Verbo se fez carne' },
    { day: 'Terça', topic: 'O testemunho de João' },
    { day: 'Quarta', topic: 'Os primeiros discípulos' },
    { day: 'Quinta', topic: 'As bodas de Caná' },
    { day: 'Sexta', topic: 'Estudo adicional' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A70] to-[#1E90FF] opacity-90 z-10" />
        <ImageWithFallback
          src="/src/assets/imgEscola.jpg"
          alt="Estudo bíblico"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Escola Sabatina</h1>
          <p className="text-xl text-gray-100">Crescendo juntos no conhecimento da Palavra</p>
        </div>
      </section>

      {/* Lição Atual */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8 text-center">Lição da Semana</h2>
          <Card className="max-w-4xl mx-auto border-t-4 border-t-[#00C2D1]">
            <CardHeader className="bg-[#F5F8FA]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-[#1E90FF] mb-2">{currentLesson.quarter}</p>
                  <CardTitle className="text-[#003A70] mb-2">{currentLesson.theme}</CardTitle>
                  <h3 className="text-[#003A70]">
                    Lição {currentLesson.week}: {currentLesson.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Verso para memorizar</p>
                  <p className="text-[#1E90FF]">{currentLesson.memory}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-[#00C2D1]" />
                <p className="text-gray-700">{currentLesson.date}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {weeklyStudy.map((study, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#F5F8FA] rounded-lg">
                    <div className="w-8 h-8 bg-[#00C2D1] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-[#003A70]">{study.day}</p>
                      <p className="text-sm text-gray-600">{study.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70]">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Lição em PDF
                </Button>
                <Button className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ler Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Classes */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8 text-center">Nossas Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <CardTitle className="text-[#003A70]">{classInfo.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="text-[#003A70]">Horário:</span> {classInfo.time}
                    </p>
                    <p>
                      <span className="text-[#003A70]">Local:</span> {classInfo.room}
                    </p>
                    <p>
                      <span className="text-[#003A70]">Professor:</span> {classInfo.teacher}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8 text-center">Recursos para Estudo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-[#1E90FF] mx-auto mb-4" />
                <CardTitle className="text-[#003A70]">Lições Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Acesse todas as lições do trimestre</p>
                <Button className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white">Acessar</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Download className="w-12 h-12 text-[#FFC145] mx-auto mb-4" />
                <CardTitle className="text-[#003A70]">Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Baixe PDFs e materiais complementares</p>
                <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70]">
                  Baixar
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00C2D1] mx-auto mb-4" />
                <CardTitle className="text-[#003A70]">Pequenos Grupos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Participe de grupos de estudo</p>
                <Button className="bg-[#00C2D1] hover:bg-[#00D5E5] text-white">Participar</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-[#27AE60] mx-auto mb-4" />
                <CardTitle className="text-[#003A70]">Calendário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Veja o calendário de lições</p>
                <Button className="bg-[#27AE60] hover:bg-[#2ECC71] text-white">Ver</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Junte-se a Nós!</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Todos os sábados às 09:00 para um tempo de estudo da Bíblia e comunhão
          </p>
          <Button className="bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70] px-8 py-6">
            Visitar Nossa Igreja
          </Button>
        </div>
      </section>
    </div>
  );
}
