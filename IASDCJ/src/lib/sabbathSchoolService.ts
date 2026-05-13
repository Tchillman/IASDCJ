// src/lib/sabbathSchoolService.ts

// Definição de tipos
export interface Lesson {
  id: number;
  title: string;
  week: number;
  quarter: string;
  theme?: string;
  memoryVerse: string;
  period: string;
  link: string;
  date: string;
  excerpt: string;
}

export interface LocalLesson {
  week: number;
  title: string;
  memory: string;
  quarter: string;
  theme: string;
}

const API_BASE_URL = 'https://mais.cpb.com.br/wp-json/wp/v2';
const LESSONS_CATEGORY_ID = 412;

// Lição padrão para fallback
const DEFAULT_LOCAL_LESSON: LocalLesson = {
  week: 1,
  title: 'Sinais, Obras e Maravilhas',
  memory: 'João 20:30-31',
  quarter: '4º Trimestre 2025',
  theme: 'O Evangelho de João'
};

// Função para obter lição local (fallback)
export function getLocalLesson(): Lesson {
  return {
    id: 1,
    title: DEFAULT_LOCAL_LESSON.title,
    week: DEFAULT_LOCAL_LESSON.week,
    quarter: DEFAULT_LOCAL_LESSON.quarter,
    theme: DEFAULT_LOCAL_LESSON.theme,
    memoryVerse: DEFAULT_LOCAL_LESSON.memory,
    period: '16 a 23 de Novembro',
    link: '#',
    date: new Date().toISOString(),
    excerpt: 'Lição da Escola Sabatina'
  };
}

// Função para extrair título sem o número da lição
function extractLessonNumberAndTitle(title: string): string {
  if (!title) return '';
  // Remove "Lição X - " do início do título
  return title.replace(/Liç[ãa]o\s+\d+\s*[-–]\s*/, '').trim();
}

// Função para extrair o número da semana
function extractWeekNumber(title: string): number {
  if (!title) return 1;
  const match = title.match(/Liç[ãa]o\s+(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

// Função para extrair o trimestre
function extractQuarter(title: string): string {
  if (!title) return '4º Trimestre 2025';
  if (title.includes('1º Trimestre')) return '1º Trimestre 2025';
  if (title.includes('2º Trimestre')) return '2º Trimestre 2025';
  if (title.includes('3º Trimestre')) return '3º Trimestre 2025';
  if (title.includes('4º Trimestre')) return '4º Trimestre 2025';
  return '4º Trimestre 2025';
}

// Função para extrair o versículo para memorizar
function extractMemoryVerse(content: string): string {
  if (!content) return 'João 20:30-31';
  // Busca o padrão do versículo no conteúdo
  const match = content.match(/["'](.*?)["']\s*\(([^)]+)\)/);
  if (match && match[2]) {
    return match[2];
  }
  // Padrão alternativo
  const altMatch = content.match(/Vers[oô] para memorizar:?\s*([^<]+)/i);
  if (altMatch && altMatch[1]) {
    return altMatch[1].trim();
  }
  return DEFAULT_LOCAL_LESSON.memory;
}

// Função para extrair o período da semana
function extractPeriod(content: string): string {
  if (!content) return '16 a 23 de Novembro';
  
  // Padrão: "09 a 15 de maio"
  let match = content.match(/(\d{1,2})\s+a\s+(\d{1,2})\s+de\s+(\w+)/i);
  
  // Padrão alternativo: "09-15 de maio"
  if (!match) {
    match = content.match(/(\d{1,2})[-\s]+(\d{1,2})\s+de\s+(\w+)/i);
  }
  
  // Padrão alternativo: "09 a 15 Maio"
  if (!match) {
    match = content.match(/(\d{1,2})\s+a\s+(\d{1,2})\s+(\w+)/i);
  }
  
  if (match) {
    return `${match[1]} a ${match[2]} de ${match[3]}`;
  }
  
  return '16 a 23 de Novembro';
}

// Função para extrair o tema do trimestre
function extractTheme(content: string): string {
  if (!content) return DEFAULT_LOCAL_LESSON.theme;
  const match = content.match(/Tema do Trimestre:?\s*([^<.]+)/i);
  return match ? match[1].trim() : DEFAULT_LOCAL_LESSON.theme;
}

// Função para parse do período (retorna array com [startDay, startMonth, endDay, endMonth])
function parsePeriod(period: string): number[] {
  if (!period || typeof period !== 'string') {
    return [16, 11, 23, 11];
  }
  
  const months: Record<string, number> = {
    'janeiro': 1, 'jan': 1,
    'fevereiro': 2, 'fev': 2,
    'março': 3, 'mar': 3,
    'abril': 4, 'abr': 4,
    'maio': 5,
    'junho': 6, 'jun': 6,
    'julho': 7, 'jul': 7,
    'agosto': 8, 'ago': 8,
    'setembro': 9, 'set': 9,
    'outubro': 10, 'out': 10,
    'novembro': 11, 'nov': 11,
    'dezembro': 12, 'dez': 12
  };
  
  // Padrão: "09 a 15 de maio"
  let match = period.match(/(\d+)\s+a\s+(\d+)\s+de\s+(\w+)/i);
  
  // Padrão alternativo: "09-15 de maio"
  if (!match) {
    match = period.match(/(\d+)[-\s]+(\d+)\s+de\s+(\w+)/i);
  }
  
  // Padrão alternativo: "09 a 15 Maio"
  if (!match) {
    match = period.match(/(\d+)\s+a\s+(\d+)\s+(\w+)/i);
  }
  
  if (match) {
    const monthName = match[3].toLowerCase();
    const month = months[monthName];
    
    if (month) {
      return [parseInt(match[1]), month, parseInt(match[2]), month];
    }
  }
  
  // Fallback seguro (Novembro)
  return [16, 11, 23, 11];
}

// Função para encontrar a lição atual baseada na data
function findCurrentLesson(lessons: Lesson[]): Lesson | null {
  if (!Array.isArray(lessons) || lessons.length === 0) {
    return null;
  }
  
  const today = new Date();
  const currentYear = today.getFullYear();
  
  for (const lesson of lessons) {
    if (lesson.period) {
      const [startDay, startMonth, endDay, endMonth] = parsePeriod(lesson.period);
      
      // Ajustar ano (se o mês for menor que o atual, pode ser ano seguinte)
      let year = currentYear;
      if (startMonth < today.getMonth() + 1) {
        year = currentYear + 1;
      }
      
      const startDate = new Date(year, startMonth - 1, startDay);
      const endDate = new Date(year, endMonth - 1, endDay);
      
      if (today >= startDate && today <= endDate) {
        return lesson;
      }
    }
  }
  
  // Se não encontrar a atual, retorna a mais recente
  return lessons[0] || null;
}

// Função principal para buscar a lição atual
export async function fetchCurrentLesson(): Promise<Lesson> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout de 10 segundos
    
    const response = await fetch(
      `${API_BASE_URL}/posts?categories=${LESSONS_CATEGORY_ID}&per_page=20&_embed`,
      { signal: controller.signal }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Verificar se data é um array válido
    if (!Array.isArray(data) || data.length === 0) {
      console.warn('Nenhuma lição encontrada na API');
      return getLocalLesson();
    }
    
    const processedLessons: Lesson[] = data
      .filter((item: any) => item && item.title && item.title.rendered)
      .map((item: any) => ({
        id: item.id,
        title: extractLessonNumberAndTitle(item.title.rendered),
        week: extractWeekNumber(item.title.rendered),
        quarter: extractQuarter(item.title.rendered),
        theme: extractTheme(item.content?.rendered || ''),
        memoryVerse: extractMemoryVerse(item.content?.rendered || ''),
        period: extractPeriod(item.content?.rendered || ''),
        link: item.link || '#',
        date: item.date,
        excerpt: item.excerpt?.rendered || ''
      }));
    
    if (processedLessons.length === 0) {
      return getLocalLesson();
    }
    
    const currentLesson = findCurrentLesson(processedLessons);
    return currentLesson || processedLessons[0] || getLocalLesson();
    
  } catch (error) {
    console.error('Erro ao buscar lição da CPB:', error);
    return getLocalLesson();
  }
}

// Função para baixar a lição em PDF
export async function downloadLessonPDF(lessonUrl: string, lessonTitle: string): Promise<boolean> {
  try {
    // Tenta converter a URL para PDF (se disponível)
    const pdfUrl = lessonUrl.replace('/licao/', '/pdf/') + '.pdf';
    
    const response = await fetch(pdfUrl, { mode: 'cors' });
    if (response.ok) {
      const blob = await response.blob();
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = `licao-${lessonTitle.toLowerCase().replace(/ /g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return true;
    }
    
    throw new Error('PDF não disponível diretamente');
    
  } catch (error) {
    console.error('Erro ao baixar PDF:', error);
    return false;
  }
}

// Função para gerar PDF local (fallback)
export function generateLocalPDF(lessonTitle: string): void {
  // Criar conteúdo HTML para o PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${lessonTitle} - Escola Sabatina</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #2f557f; }
        .verse { background: #f0f4f8; padding: 15px; border-left: 4px solid #ff7a1a; margin: 20px 0; }
      </style>
    </head>
    <body>
      <h1>${lessonTitle}</h1>
      <div class="verse">
        <strong>Verso para memorizar:</strong> ${DEFAULT_LOCAL_LESSON.memory}
      </div>
      <p>Material gerado automaticamente pelo sistema da Igreja Adventista.</p>
    </body>
    </html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `licao-${lessonTitle.toLowerCase().replace(/ /g, '-')}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}