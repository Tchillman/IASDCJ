import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMinistries, setShowMinistries] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const ministries = [
    { name: "Jovens", path: "/ministerios#jovens" },
    { name: "Música", path: "/ministerios#musica" },
    { name: "Escola Sabatina", path: "/ministerios#escola-sabatina" },
    { name: "Ação Missionária", path: "/ministerios#acao-missionaria" },
    { name: "Comunicação", path: "/ministerios#comunicacao" },
    { name: "Saúde", path: "/ministerios#saude" },
  ];

  const toggleMinistries = () => {
    setShowMinistries(!showMinistries);
  };

  const closeMinistries = () => {
    setShowMinistries(false);
  };

  return (
    <header className="bg-[#003A70] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 group">
            <img
              src="/src/assets/adventist-symbol--denim.svg"
              alt="Igreja Adventista Jovem Central de Luanda"
              width={60}
              height={60}
            />

            <div className="hidden md:block">
              <h1 className="text-white">Igreja Adventista</h1>
              <p className="text-sm text-[#4DA6FF]">Jovem Central de Luanda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/") ? "text-[#4DA6FF]" : ""
              }`}>
              Início
            </Link>
            <Link
              to="/sobre"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/sobre") ? "text-[#4DA6FF]" : ""
              }`}>
              Sobre Nós
            </Link>
            <div className="relative">
              <button
                onClick={toggleMinistries}
                className={`flex items-center gap-1 hover:text-[#4DA6FF] transition-colors px-3 py-2 ${
                  showMinistries ? "text-[#4DA6FF]" : ""
                }`}>
                Ministérios{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showMinistries ? "rotate-180" : ""}`}
                />
              </button>
              {showMinistries && (
                <>
                  {/* Overlay para fechar ao clicar fora */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={closeMinistries}
                  />
                  <div className="absolute top-full left-0 mt-1 bg-white text-[#003A70] rounded-lg shadow-2xl py-2 min-w-[220px] z-20 border border-gray-100">
                    {ministries.map((ministry) => (
                      <Link
                        key={ministry.path}
                        to={ministry.path}
                        className="block px-6 py-3 hover:bg-[#E6F3FF] transition-colors text-base"
                        onClick={closeMinistries}>
                        {ministry.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
            <Link
              to="/agenda"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/agenda") ? "text-[#4DA6FF]" : ""
              }`}>
              Agenda
            </Link>
            <Link
              to="/sermoes"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/sermoes") ? "text-[#4DA6FF]" : ""
              }`}>
              Sermões
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/blog") ? "text-[#4DA6FF]" : ""
              }`}>
              Blog
            </Link>
            <Link
              to="/contato"
              className={`hover:text-[#4DA6FF] transition-colors ${
                isActive("/contato") ? "text-[#4DA6FF]" : ""
              }`}>
              Contato
            </Link>
            <Link
              to="/contribuir"
              className="bg-[#FFC145] text-[#003A70] px-4 py-2 rounded-lg hover:bg-[#FFDA5A] transition-colors">
              Contribuir
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
            <Link
              to="/sobre"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Sobre Nós
            </Link>
            <Link
              to="/ministerios"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Ministérios
            </Link>
            <Link
              to="/agenda"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Agenda
            </Link>
            <Link
              to="/sermoes"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Sermões
            </Link>
            <Link
              to="/escola-sabatina"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Escola Sabatina
            </Link>
            <Link
              to="/blog"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link
              to="/oracao"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Pedidos de Oração
            </Link>
            <Link
              to="/noticias"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Notícias
            </Link>
            <Link
              to="/contato"
              className="block py-2 hover:text-[#4DA6FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
            <Link
              to="/contribuir"
              className="block bg-[#FFC145] text-[#003A70] px-4 py-2 rounded-lg hover:bg-[#FFDA5A] transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}>
              Contribuir
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
