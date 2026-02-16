import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Entre em Contato</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Estamos aqui para responder suas perguntas e recebê-lo de braços abertos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-[#003A70] mb-6">Informações de Contato</h2>
            
            <div className="space-y-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-[#003A70] mb-2">Localização</h3>
                    <p className="text-gray-600">
                      Rua. Rei Katyavala, Nº 99
                      <br />
                      Luanda, Angola
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-[#003A70] mb-2">Telefone / WhatsApp</h3>
                    <p className="text-gray-600">
                      +244 XXX XXX XXX
                      <br />
                      +244 XXX XXX XXX
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-[#003A70] mb-2">E-mail</h3>
                    <a href="iasdjcdeluanda@gmail.com" >
                <span className=" text-gray-600"> iasdjcdeluanda@gmail.com </span>
                 </a>
                
                   
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-[#003A70] mb-2">Horário de Atendimento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 09:00 - 17:00</p>
                      <p>Sábado: 08:30 - 13:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Redes Sociais */}
            <Card className="bg-[#E6F3FF] border-none">
              <CardHeader>
                <CardTitle className="text-[#003A70]">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Siga-nos nas redes sociais e fique por dentro de tudo!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/16X7BBakVu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/iasdcjovem?igsh=cDVncGN6YTY5dmE="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@iasdcentraldeluanda?si=6zCAX1BiYjET3RnF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-[#003A70] mb-6">Envie uma Mensagem</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+244 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Como podemos ajudar?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FFC145] hover:bg-[#FFDA5A] text-[#003A70]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#003A70] mb-8 text-center">Como Chegar</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Mapa de Localização</p>
                <p className="text-sm">(Google Maps será integrado aqui)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
