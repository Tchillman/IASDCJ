import { Clock, User, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useState } from 'react';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const posts = [
    {
      id: 1,
      title: 'A Importância da Fé Diária',
      author: 'Maria Santos',
      date: '2025-11-10',
      category: 'Devocional',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGV8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Refletindo sobre como manter uma vida devocional consistente em meio aos desafios diários...',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Servindo com Amor: Experiências Missionárias',
      author: 'Pedro Costa',
      date: '2025-11-08',
      category: 'Testemunho',
      image: 'https://images.unsplash.com/photo-1762474343462-fbb221e36c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzI5MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Histórias inspiradoras de como jovens têm transformado comunidades através do serviço...',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Oração: O Poder da Comunhão com Deus',
      author: 'Ana Ferreira',
      date: '2025-11-05',
      category: 'Espiritualidade',
      image: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYzMjkzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Descobrindo como a oração pode transformar nossa vida e nos aproximar de Deus...',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Jovens na Bíblia: Exemplos de Fé',
      author: 'João Silva',
      date: '2025-11-03',
      category: 'Estudo Bíblico',
      image: 'https://images.unsplash.com/photo-1511551348638-75d95b7d416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIweW91dGh8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Explorando as histórias de jovens como Daniel, José e Ester que impactaram o mundo...',
      readTime: '8 min',
    },
    {
      id: 5,
      title: 'Vivendo a Esperança Adventista',
      author: 'Maria Santos',
      date: '2025-11-01',
      category: 'Doutrina',
      image: 'https://images.unsplash.com/photo-1588033527872-330aa4b5fe36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNodXJjaCUyMHdvcnNoaXB8ZW58MXx8fHwxNzYzMjkzOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'O que significa viver com esperança na volta de Jesus em nosso dia a dia...',
      readTime: '6 min',
    },
    {
      id: 6,
      title: 'Música e Adoração: Uma Jornada Espiritual',
      author: 'Pedro Costa',
      date: '2025-10-28',
      category: 'Louvor',
      image: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Como a música nos conecta com Deus e enriquece nossa experiência de adoração...',
      readTime: '5 min',
    },
  ];

  const categories = ['Todos', 'Devocional', 'Testemunho', 'Espiritualidade', 'Estudo Bíblico', 'Doutrina', 'Louvor'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003A70] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Blog & Devocionais</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Reflexões, testemunhos e estudos para inspirar sua jornada de fé
          </p>
        </div>
      </section>

      {/* Categorias */}
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

      {/* Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) => selectedCategory === 'Todos' || post.category === selectedCategory)
              .map((post) => (
                <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-[#FFC145] text-[#003A70] shadow-md border-0 px-3 py-1.5">
                      {post.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-[#003A70] group-hover:text-[#1E90FF] transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4 text-[#00C2D1]" />
                        <span>{post.author}</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {new Date(post.date).toLocaleDateString('pt-PT', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#003A70] mb-6">Receba Devocionais Diários</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscreva-se para receber reflexões inspiradoras diretamente no seu e-mail
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