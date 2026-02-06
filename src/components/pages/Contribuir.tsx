import { Building2, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function Contribuir() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Contribuições e Dízimos</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Sua fidelidade fortalece a missão da igreja e abençoa vidas
          </p>
        </div>
      </section>

      {/* Importância */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-[#003A70] mb-6">Por Que Dizimar e Ofertar?</h2>
            <p className="text-gray-700 mb-6">
              O dízimo é um princípio bíblico estabelecido por Deus para sustentar Sua obra na Terra.
              Ao devolver a Deus 10% de nossa renda, reconhecemos que Ele é o dono de tudo e que
              dependemos de Suas bênçãos.
            </p>
            <p className="text-gray-700">
              "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa,
              e depois fazei prova de mim, diz o Senhor dos Exércitos, se eu não vos abrir as janelas
              do céu e não derramar sobre vós uma bênção tal, que dela vos advenha a maior abastança."
              — Malaquias 3:10
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-t-4 border-t-[#00C2D1]">
              <CardHeader>
                <CardTitle className="text-[#003A70]">Evangelismo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apoiar programas de evangelismo e alcançar mais pessoas com o evangelho
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-[#FFC145]">
              <CardHeader>
                <CardTitle className="text-[#003A70]">Ação Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Auxiliar famílias carentes e promover projetos sociais na comunidade
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-[#1E90FF]">
              <CardHeader>
                <CardTitle className="text-[#003A70]">Ministérios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fortalecer os diversos ministérios e programas da igreja
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formas de Contribuir */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8 text-center">Como Contribuir</h2>
          
          <Tabs defaultValue="transferencia" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transferencia">Transferência</TabsTrigger>
              <TabsTrigger value="presencial">Presencial</TabsTrigger>
            </TabsList>

            <TabsContent value="transferencia">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#003A70] flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#1E90FF]" />
                    Transferência Bancária
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-[#E6F3FF] p-6 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Banco:</p>
                    <p className="text-[#003A70] mb-4">Banco Angolano de Investimento - BAI</p>
                    
                    <p className="text-sm text-gray-600 mb-2">IBAN:</p>
                    <p className="text-[#003A70] mb-4">AO06 0040 0000 3978 7472 1010 8</p>

                     <p className="text-sm text-gray-600 mb-2">Banco:</p>
                    <p className="text-[#003A70] mb-4">Banco de Fomento Angola - BFA</p>
                    
                    <p className="text-sm text-gray-600 mb-2">IBAN:</p>
                    <p className="text-[#003A70] mb-4">AO06 0006 0000 7781 1347 3011 9</p>

                    <p className="text-sm text-gray-600 mb-2">Referência:</p>
                    <p className="text-[#003A70]">Dízimos</p>
                    <br />

                    <hr className='my-6 border-2'/>
                    <br />

                    <p className="text-sm text-gray-600 mb-2">Banco:</p>
                    <p className="text-[#003A70] mb-4">Banco de Poupança e Credito - BPC</p>
                    
                    <p className="text-sm text-gray-600 mb-2">IBAN:</p>
                    <p className="text-[#003A70] mb-4">AO06 0010 0001 0001 1151 0113 0</p>

                    <p className="text-sm text-gray-600 mb-2">Referência:</p>
                    <p className="text-[#003A70]">Ofertas, doações e contribuições</p>
                    
                    <p className="text-sm text-gray-600 mb-2">Titular:</p>
                    <p className="text-[#003A70] mb-4">Igreja Adventista Jovem Central de Luanda</p>

                     <h3 className="text-[#003A70] mb-2">E-mail</h3>
                    <a href="iasdjcdeluanda@gmail.com" >
                <span className=" text-gray-600"> iasdjcdeluanda@gmail.com </span>
                 </a>
                    
                    
                  </div>

                  <Button className="w-full bg-[#1E90FF] hover:bg-[#4DA6FF] text-white">
                    Copiar Dados Bancários
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="presencial">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#003A70] flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#00C2D1]" />
                    Presencial na Igreja
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Você pode entregar seus dízimos e ofertas pessoalmente durante os cultos ou
                    na secretaria da igreja.
                  </p>
                  <div className="bg-[#E6F3FF] p-6 rounded-lg">
                    <p className="text-[#003A70] mb-4">Horários de Atendimento:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>Segunda a Sexta: 09:00 - 17:00</li>
                      <li>Sábado: 08:30 - 13:00</li>
                      <li>Durante os cultos: Envelope de dízimos disponível</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-t-4 border-t-[#00C2D1]">
              <CardHeader>
                <CardTitle className="text-[#003A70] flex items-center gap-2">
                  <Info className="w-6 h-6 text-[#00C2D1]" />
                  Transparência e Prestação de Contas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A Igreja Adventista do Sétimo Dia mantém rigorosos padrões de transparência financeira.
                  Todos os dízimos e ofertas são administrados com responsabilidade e integridade.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>100% dos dízimos são destinados ao sustento da obra pastoral e evangelística</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Relatórios financeiros anuais disponíveis para os membros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Auditoria externa independente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00C2D1] mt-1">•</span>
                    <span>Sistema organizado de gestão financeira</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}