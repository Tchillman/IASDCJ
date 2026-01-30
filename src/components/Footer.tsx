import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#003A70] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-[#FFC145] mb-4">Igreja Adventista</h3>
            <p className="text-sm text-gray-300 mb-4">
              Jovem Central de Luanda
            </p>
            <p className="text-sm text-gray-300">
              Uma comunidade de jovens que vivem a fé através do amor, serviço e esperança.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#FFC145] mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/ministerios" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Ministérios
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Agenda de Eventos
                </Link>
              </li>
              <li>
                <Link to="/sermoes" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Sermões
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Blog & Devocionais
                </Link>
              </li>
              <li>
                <Link to="/oracao" className="text-sm hover:text-[#4DA6FF] transition-colors">
                  Pedidos de Oração
                </Link>
              </li>
            </ul>
          </div>

          {/* Horários dos Cultos */}
          <div>
            <h3 className="text-[#FFC145] mb-4">Horários dos Cultos</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Sábado - Escola Sabatina</p>
                  <p className="text-sm text-gray-300">09:00 - 10:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Sábado - Culto Divino</p>
                  <p className="text-sm text-gray-300">10:30 - 12:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Quarta-feira - Reunião de Oração</p>
                  <p className="text-sm text-gray-300">19:00 - 20:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#FFC145] mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Muculusso, Luanda</span>
              </li>
              <li className="flex items-start gap-2">
                
                <Phone className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <a href="+244 943 254 456" >
                <span className="text-sm">+244 943 254 456</span>
                </a>
              
                
              </li>
              <li className="flex items-start gap-2">
            
                <Mail className="w-5 h-5 text-[#00C2D1] mt-0.5 flex-shrink-0" />
                <a href="iasdjcdeluanda@gmail.com" >
                <span className="text-sm"> iasdjcdeluanda@gmail.com </span>
                 </a>
                
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h4 className="text-[#FFC145] mb-3">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/16X7BBakVu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/iasdcjovem?igsh=cDVncGN6YTY5dmE="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@iasdcentraldeluanda?si=6zCAX1BiYjET3RnF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center hover:bg-[#4DA6FF] transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4DA6FF] mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Igreja Adventista Jovem Central de Luanda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
