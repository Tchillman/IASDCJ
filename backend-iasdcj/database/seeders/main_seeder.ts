import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Event from '#models/event'
import BlogPost from '#models/blog_post'
import Ministry from '#models/ministry'
import News from '#models/news'
import Sermon from '#models/sermon'
import PrayerRequest from '#models/prayer_request'
import SabbathSchoolLesson from '#models/sabbath_school_lesson'
import SabbathSchoolClass from '#models/sabbath_school_class'
import AboutContent from '#models/about_content'
import Leader from '#models/leader'

export default class extends BaseSeeder {
  async run() {
    // =====================
    // Utilizador administrador padrao
    // =====================
    await User.updateOrCreate(
      { email: 'admin@iasdcj.org' },
      {
        fullName: 'Administrador IASDCJ',
        email: 'admin@iasdcj.org',
        password: 'admin123456',
        role: 'admin',
      }
    )

    // =====================
    // Eventos / Agenda
    // =====================
    const events = [
      {
        title: 'Culto Divino',
        date: '2025-11-23',
        time: '10:30',
        location: 'Templo Principal',
        category: 'Culto',
        description: 'Culto de adoracao com a presenca do Pr. Joao Silva',
        attendees: 150,
        image:
          'https://images.unsplash.com/photo-1662151900393-97f6bc1567ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        isWeekly: false,
      },
      {
        title: 'Reuniao de Oracao',
        date: '2025-11-20',
        time: '19:00',
        location: 'Sala de Oracao',
        category: 'Oracao',
        description: 'Momento de intercessao e comunhao',
        attendees: 50,
        image:
          'https://images.unsplash.com/photo-1652207069570-8307e991d3e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        isWeekly: false,
      },
      {
        title: 'Congresso de Jovens 2025',
        date: '2025-01-20',
        time: '09:00',
        location: 'Centro de Convencoes',
        category: 'Evento',
        description: 'Tres dias de renovacao espiritual, workshops e comunhao',
        attendees: 500,
        image:
          'https://images.unsplash.com/photo-1617196288062-49bf97a38d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        isWeekly: false,
      },
      {
        title: 'Culto de Louvor e Adoracao',
        date: '2025-11-27',
        time: '19:00',
        location: 'Templo Principal',
        category: 'Louvor',
        description: 'Noite especial de musica e oracao com grupos vocais',
        attendees: 200,
        image:
          'https://images.unsplash.com/photo-1583869153539-251655e329de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        isWeekly: false,
      },
      {
        title: 'Acao Social - Distribuicao de Alimentos',
        date: '2025-11-30',
        time: '08:00',
        location: 'Comunidade do Sambizanga',
        category: 'Acao Social',
        description: 'Levando amor e alimento as familias carentes',
        attendees: 80,
        image:
          'https://images.unsplash.com/photo-1673280401347-309363111070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        isWeekly: false,
      },
    ]

    // Programacao semanal
    const weeklyEvents = [
      {
        title: 'Escola Sabatina',
        date: '2025-01-01',
        time: '09:00 - 10:00',
        location: 'Salas de Estudo',
        category: 'Estudo',
        attendees: 120,
        isWeekly: true,
        dayOfWeek: 'Sab',
      },
      {
        title: 'Culto Divino',
        date: '2025-01-01',
        time: '10:30 - 12:00',
        location: 'Templo Principal',
        category: 'Culto',
        attendees: 150,
        isWeekly: true,
        dayOfWeek: 'Sab',
      },
      {
        title: 'Programa de Jovens',
        date: '2025-01-01',
        time: '16:00 - 18:00',
        location: 'Salao de Eventos',
        category: 'Evento',
        attendees: 100,
        isWeekly: true,
        dayOfWeek: 'Sab',
      },
      {
        title: 'Reuniao de Oracao',
        date: '2025-01-01',
        time: '19:00 - 20:30',
        location: 'Sala de Oracao',
        category: 'Oracao',
        attendees: 50,
        isWeekly: true,
        dayOfWeek: 'Qua',
      },
      {
        title: 'Ensaio do Coral',
        date: '2025-01-01',
        time: '15:00 - 17:00',
        location: 'Templo Principal',
        category: 'Louvor',
        attendees: 30,
        isWeekly: true,
        dayOfWeek: 'Dom',
      },
    ]

    await Event.updateOrCreateMany('title', [...events, ...weeklyEvents])

    // =====================
    // Blog Posts
    // =====================
    await BlogPost.updateOrCreateMany('title', [
      {
        title: 'A Importancia da Fe Diaria',
        author: 'Maria Santos',
        category: 'Devocional',
        excerpt:
          'Refletindo sobre como manter uma vida devocional consistente em meio aos desafios diarios...',
        readTime: '5 min',
        published: true,
      },
      {
        title: 'Servindo com Amor: Experiencias Missionarias',
        author: 'Pedro Costa',
        category: 'Testemunho',
        excerpt:
          'Historias inspiradoras de como jovens tem transformado comunidades atraves do servico...',
        readTime: '7 min',
        published: true,
      },
      {
        title: 'Oracao: O Poder da Comunhao com Deus',
        author: 'Ana Ferreira',
        category: 'Espiritualidade',
        excerpt:
          'Descobrindo como a oracao pode transformar nossa vida e nos aproximar de Deus...',
        readTime: '6 min',
        published: true,
      },
      {
        title: 'Jovens na Biblia: Exemplos de Fe',
        author: 'Joao Silva',
        category: 'Estudo Biblico',
        excerpt:
          'Explorando as historias de jovens como Daniel, Jose e Ester que impactaram o mundo...',
        readTime: '8 min',
        published: true,
      },
      {
        title: 'Vivendo a Esperanca Adventista',
        author: 'Maria Santos',
        category: 'Doutrina',
        excerpt:
          'O que significa viver com esperanca na volta de Jesus em nosso dia a dia...',
        readTime: '6 min',
        published: true,
      },
      {
        title: 'Musica e Adoracao: Uma Jornada Espiritual',
        author: 'Pedro Costa',
        category: 'Louvor',
        excerpt:
          'Como a musica nos conecta com Deus e enriquece nossa experiencia de adoracao...',
        readTime: '5 min',
        published: true,
      },
    ])

    // =====================
    // Ministerios
    // =====================
    await Ministry.updateOrCreateMany('slug', [
      {
        slug: 'jovens',
        title: 'Jovens',
        icon: 'Users',
        color: '#00C2D1',
        description:
          'Programas e atividades voltados para o crescimento espiritual e social dos jovens.',
        activities: [
          'Aos domingos: Encontros de jovens das 8h as 12h',
          'Grupos de estudo biblico',
          'Eventos sociais e recreativos',
          'Projetos de evangelismo',
        ],
      },
      {
        slug: 'musica',
        title: 'Musica',
        icon: 'Music',
        color: '#FFC145',
        description:
          'Coral, grupos vocais e instrumentais que ministram atraves da musica.',
        activities: [
          'Ensaios do coral - Tercas e Quintas 17h as 19h',
          'Grupo de louvor juvenil',
          'Aulas de instrumentos musicais',
          'Apresentacoes especiais',
        ],
      },
      {
        slug: 'escola-sabatina',
        title: 'Escola Sabatina',
        icon: 'BookOpen',
        color: '#1E90FF',
        description:
          'Estudo sistematico da Biblia aos sabados pela manha.',
        activities: [
          'Classes para todas as idades',
          'Licoes trimestrais',
          'Discussoes em grupos pequenos',
          'Materiais de estudo disponiveis',
        ],
      },
      {
        slug: 'acao-missionaria',
        title: 'Acao Missionaria',
        icon: 'Heart',
        color: '#FF6B6B',
        description: 'Projetos de evangelismo e servico a comunidade.',
        activities: [
          'Distribuicao de alimentos',
          'Visitas a hospitais e lares',
          'Evangelismo publico',
          'Estudos biblicos na comunidade',
        ],
      },
      {
        slug: 'comunicacao',
        title: 'Comunicacao',
        icon: 'Radio',
        color: '#9B59B6',
        description:
          'Divulgacao das atividades da igreja atraves de diversos canais.',
        activities: [
          'Gestao de redes sociais',
          'Producao de videos',
          'Design grafico',
          'Transmissoes ao vivo',
        ],
      },
      {
        slug: 'saude',
        title: 'Saude',
        icon: 'Activity',
        color: '#27AE60',
        description: 'Promocao da saude fisica, mental e espiritual.',
        activities: [
          'Palestras sobre vida saudavel',
          'Grupos de caminhada',
          'Cursos de culinaria saudavel',
          'Apoio psicologico e espiritual',
        ],
      },
    ])

    // =====================
    // Noticias
    // =====================
    await News.updateOrCreateMany('title', [
      {
        title: 'Congresso de Jovens 2025: Inscricoes Abertas',
        category: 'Evento',
        excerpt:
          'Participe do maior evento jovem do ano! Tres dias de renovacao espiritual com pregadores internacionais, workshops e muito louvor.',
        published: true,
      },
      {
        title: 'Campanha de Arrecadacao de Alimentos foi um Sucesso',
        category: 'Acao Social',
        excerpt:
          'Mais de 200 familias foram beneficiadas pela nossa campanha de arrecadacao de alimentos.',
        published: true,
      },
      {
        title: 'Novo Programa de Mentoria para Jovens',
        category: 'Ministerio',
        excerpt:
          'Lancamos um programa de mentoria espiritual conectando jovens com membros experientes da igreja.',
        published: true,
      },
      {
        title: 'Culto Especial de Louvor e Adoracao',
        category: 'Culto',
        excerpt:
          'Noite inesquecivel de adoracao reuniu centenas de jovens em uma atmosfera de louvor.',
        published: true,
      },
      {
        title: 'Semana de Oracao - Programacao Divulgada',
        category: 'Comunicado',
        excerpt:
          'Confira a programacao completa da Semana de Oracao que acontecera de 20 a 27 de janeiro.',
        published: true,
      },
      {
        title: 'Batismo: Celebrando Novas Vidas em Cristo',
        category: 'Celebracao',
        excerpt:
          '15 jovens foram batizados no ultimo sabado, marcando um novo capitulo em suas vidas de fe.',
        published: true,
      },
    ])

    // =====================
    // Sermoes
    // =====================
    await Sermon.updateOrCreateMany('title', [
      {
        title: 'A Esperanca que Transforma',
        speaker: 'Pr. Joao Silva',
        series: 'Serie: Vivendo com Esperanca',
        duration: '45 min',
        views: 1234,
        type: 'video',
        published: true,
      },
      {
        title: 'Vivendo a Fe no Dia a Dia',
        speaker: 'Pr. Maria Santos',
        series: 'Serie: Fe Pratica',
        duration: '38 min',
        views: 987,
        type: 'video',
        published: true,
      },
      {
        title: 'O Amor de Deus sem Limites',
        speaker: 'Pr. Pedro Costa',
        series: 'Serie: O Carater de Deus',
        duration: '42 min',
        views: 1456,
        type: 'text',
        published: true,
      },
      {
        title: 'Preparados para a Volta de Jesus',
        speaker: 'Pr. Joao Silva',
        series: 'Serie: Sinais dos Tempos',
        duration: '50 min',
        views: 2103,
        type: 'video',
        published: true,
      },
      {
        title: 'O Poder da Oracao',
        speaker: 'Pr. Ana Ferreira',
        series: 'Serie: Vida de Oracao',
        duration: '35 min',
        views: 876,
        type: 'video',
        published: true,
      },
      {
        title: 'Jovens com Proposito',
        speaker: 'Pr. Maria Santos',
        series: 'Serie: Chamado para Servir',
        duration: '40 min',
        views: 1567,
        type: 'text',
        published: true,
      },
    ])

    // =====================
    // Pedidos de Oracao
    // =====================
    await PrayerRequest.updateOrCreateMany('name', [
      {
        name: 'Joao S.',
        request: 'Peco oracao pela saude da minha mae que esta hospitalizada.',
        privacy: 'public' as const,
        prayers: 45,
      },
      {
        name: 'Maria C.',
        request:
          'Agradeco a Deus pelas bencaos recebidas e peco sabedoria para nova fase profissional.',
        privacy: 'public' as const,
        prayers: 32,
      },
      {
        name: 'Pedro M.',
        request: 'Oracao pela reconciliacao familiar e paz no lar.',
        privacy: 'public' as const,
        prayers: 28,
      },
    ])

    // =====================
    // Escola Sabatina - Licao Atual
    // =====================
    await SabbathSchoolLesson.updateOrCreate(
      { quarter: '4o Trimestre 2025', week: 8 },
      {
        quarter: '4o Trimestre 2025',
        theme: 'O Evangelho de Joao',
        week: 8,
        title: 'Sinais, Obras e Maravilhas',
        memoryVerse: 'Joao 20:30-31',
        dateRange: '16-23 de Novembro',
        isCurrent: true,
      }
    )

    // Classes da Escola Sabatina
    await SabbathSchoolClass.updateOrCreateMany('name', [
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
    ])

    // =====================
    // Conteudo da pagina Sobre
    // =====================
    await AboutContent.updateOrCreateMany('section', [
      {
        section: 'historia',
        title: 'Nossa Historia',
        content:
          'A Igreja Adventista Jovem Central de Luanda nasceu do desejo de criar um espaco acolhedor onde jovens pudessem crescer espiritualmente, desenvolver seus talentos e servir a comunidade com amor e dedicacao. Fundada em 2010, nossa comunidade tem crescido constantemente, impactando centenas de vidas atraves de programas de evangelismo, acao social, musica e estudos biblicos. Somos parte da Igreja Adventista do Setimo Dia, uma denominacao crista mundial presente em mais de 200 paises. Hoje, somos uma comunidade vibrante de mais de 500 jovens que se reunem semanalmente para adoracao, estudo da Palavra de Deus e comunhao.',
        sortOrder: 1,
      },
      {
        section: 'missao',
        title: 'Missao',
        content:
          'Fazer discipulos de Cristo entre os jovens de Luanda, equipando-os para viver uma fe autentica e transformar suas comunidades atraves do amor e servico.',
        sortOrder: 2,
      },
      {
        section: 'visao',
        title: 'Visao',
        content:
          'Ser uma referencia de comunidade jovem crista em Luanda, conhecida pelo amor, excelencia e impacto social, preparando jovens para a volta de Jesus.',
        sortOrder: 3,
      },
      {
        section: 'valores',
        title: 'Valores',
        content:
          'Amor a Deus e ao proximo; Integridade e autenticidade; Excelencia em tudo que fazemos; Servico a comunidade; Estudo da Palavra de Deus.',
        sortOrder: 4,
      },
    ])

    // =====================
    // Lideranca
    // =====================
    await Leader.updateOrCreateMany('name', [
      { name: 'Pr. Isaac Manuel', role: 'Pastor Principal', sortOrder: 1 },
      { name: 'Hernani Calunga', role: 'Anciao Coordenador', sortOrder: 2 },
      { name: 'Dicanasio Jafete', role: 'Anciao', sortOrder: 3 },
      { name: 'Aires Tome', role: 'Dr. Escola Sabatina', sortOrder: 4 },
      { name: 'Josane Chicumba', role: 'Dra. Escola Sabatina', sortOrder: 5 },
      { name: 'Paulo Facata', role: 'Ministerio Pessoal', sortOrder: 6 },
      { name: 'Genesio Da Costa', role: 'Tecnico de Som', sortOrder: 7 },
    ])

    console.log('Seeder executado com sucesso! Dados iniciais inseridos.')
  }
}
