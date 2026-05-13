// src/components/ui/CurrentLesson.tsx
import { useState, useEffect } from 'react';
import { Calendar, BookOpen, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { fetchCurrentLesson, type Lesson } from '../../lib/sabbathSchoolService';

// Definindo o tipo para o estado de erro
type ErrorState = string | null;

export function CurrentLesson() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorState>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function loadLesson() {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchCurrentLesson();
        
        if (isMounted) {
          // Verificar se data é válida
          if (data && data.title) {
            setLesson(data);
          } else {
            setError('Dados da lição não estão disponíveis no momento.');
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error('Erro ao carregar lição:', err);
          setError('Não foi possível carregar a lição. Tente novamente mais tarde.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    loadLesson();
    
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#1E90FF]" />
        <span className="ml-2 text-[#003A70]">Carregando lição...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 bg-red-50 rounded-lg mx-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
        <p className="text-red-600">{error}</p>
        <Button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#1E90FF] text-white hover:bg-[#4DA6FF]"
        >
          Tentar novamente
        </Button>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-center py-8 bg-yellow-50 rounded-lg mx-4">
        <p className="text-yellow-600">Nenhuma lição disponível no momento.</p>
        <Button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#1E90FF] text-white hover:bg-[#4DA6FF]"
        >
          Recarregar
        </Button>
      </div>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto border-t-4 border-t-[#00C2D1] shadow-lg">
      <CardHeader className="bg-[#F5F8FA]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-[#1E90FF] mb-2 text-sm font-semibold">
              {lesson.quarter || '4º Trimestre 2025'}
            </p>
            <CardTitle className="text-[#003A70] mb-2 text-xl md:text-2xl">
              {lesson.theme || lesson.title || 'Lição da Escola Sabatina'}
            </CardTitle>
            <h3 className="text-[#003A70] text-lg md:text-xl">
              {lesson.week ? `Semana ${lesson.week}: ` : ''}
              {lesson.title || 'Lição da Semana'}
            </h3>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-600">Verso para memorizar</p>
            <p className="text-[#1E90FF] font-semibold text-sm md:text-base">
              {lesson.memoryVerse || 'João 20:30-31'}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-[#00C2D1]" />
          <p className="text-gray-700">
            {lesson.period || '16 a 23 de Novembro'}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {lesson.link && lesson.link !== '#' ? (
            <a 
              href={lesson.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white w-full sm:w-auto">
                <BookOpen className="w-4 h-4 mr-2" />
                Ler Online
              </Button>
            </a>
          ) : (
            <Button 
              className="bg-[#1E90FF] hover:bg-[#4DA6FF] text-white w-full sm:w-auto"
              disabled
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Indisponível
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}