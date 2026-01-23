import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Sobre } from './components/pages/Sobre';
import { Ministerios } from './components/pages/Ministerios';
import { Agenda } from './components/pages/Agenda';
import { Sermoes } from './components/pages/Sermoes';
import { EscolaSabatina } from './components/pages/EscolaSabatina';
import { Blog } from './components/pages/Blog';
import { Oracao } from './components/pages/Oracao';
import { Contribuir } from './components/pages/Contribuir';
import { Contato } from './components/pages/Contato';
import { Noticias } from './components/pages/Noticias';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/sermoes" element={<Sermoes />} />
            <Route path="/escola-sabatina" element={<EscolaSabatina />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/oracao" element={<Oracao />} />
            <Route path="/contribuir" element={<Contribuir />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/noticias" element={<Noticias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}