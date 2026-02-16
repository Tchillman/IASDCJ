/*
|--------------------------------------------------------------------------
| Rotas da API - IASD Central Jovem de Luanda
|--------------------------------------------------------------------------
|
| Todas as rotas da API do site da igreja. As rotas publicas nao
| requerem autenticacao. As rotas de administracao requerem token de acesso.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

// Importar controllers usando lazy loading para melhor performance
const AuthController = () => import('#controllers/auth_controller')
const EventsController = () => import('#controllers/events_controller')
const BlogPostsController = () => import('#controllers/blog_posts_controller')
const ContactsController = () => import('#controllers/contacts_controller')
const DonationsController = () => import('#controllers/donations_controller')
const SabbathSchoolController = () => import('#controllers/sabbath_school_controller')
const MinistriesController = () => import('#controllers/ministries_controller')
const NewsController = () => import('#controllers/news_controller')
const SermonsController = () => import('#controllers/sermons_controller')
const PrayerRequestsController = () => import('#controllers/prayer_requests_controller')
const AboutController = () => import('#controllers/about_controller')

// Rota raiz - verificacao de saude da API
router.get('/', async () => {
  return {
    name: 'IASD Central Jovem de Luanda - API',
    version: '1.0.0',
    status: 'online',
  }
})

// =============================================
// ROTAS PUBLICAS (sem autenticacao)
// =============================================
router
  .group(() => {
    // --- Autenticacao ---
    router.post('/auth/register', [AuthController, 'register'])
    router.post('/auth/login', [AuthController, 'login'])

    // --- Eventos / Agenda ---
    router.get('/events', [EventsController, 'index'])
    router.get('/events/:id', [EventsController, 'show'])

    // --- Blog ---
    router.get('/blog', [BlogPostsController, 'index'])
    router.get('/blog/:id', [BlogPostsController, 'show'])

    // --- Contato (enviar mensagem) ---
    router.post('/contacts', [ContactsController, 'store'])

    // --- Escola Sabatina ---
    router.get('/escola-sabatina/licoes', [SabbathSchoolController, 'indexLessons'])
    router.get('/escola-sabatina/licoes/atual', [SabbathSchoolController, 'currentLesson'])
    router.get('/escola-sabatina/licoes/:id', [SabbathSchoolController, 'showLesson'])
    router.get('/escola-sabatina/classes', [SabbathSchoolController, 'indexClasses'])

    // --- Ministerios ---
    router.get('/ministerios', [MinistriesController, 'index'])
    router.get('/ministerios/:slug', [MinistriesController, 'show'])

    // --- Noticias ---
    router.get('/noticias', [NewsController, 'index'])
    router.get('/noticias/:id', [NewsController, 'show'])

    // --- Sermoes ---
    router.get('/sermoes', [SermonsController, 'index'])
    router.get('/sermoes/:id', [SermonsController, 'show'])

    // --- Pedidos de Oracao ---
    router.get('/oracoes', [PrayerRequestsController, 'index'])
    router.post('/oracoes', [PrayerRequestsController, 'store'])
    router.post('/oracoes/:id/orar', [PrayerRequestsController, 'pray'])

    // --- Sobre ---
    router.get('/sobre', [AboutController, 'indexContent'])
    router.get('/sobre/secao/:section', [AboutController, 'showBySection'])
    router.get('/sobre/lideranca', [AboutController, 'indexLeaders'])
  })
  .prefix('/api')

// =============================================
// ROTAS PROTEGIDAS (requerem autenticacao)
// =============================================
router
  .group(() => {
    // --- Autenticacao ---
    router.post('/auth/logout', [AuthController, 'logout'])
    router.get('/auth/me', [AuthController, 'me'])

    // --- Eventos ---
    router.post('/events', [EventsController, 'store'])
    router.put('/events/:id', [EventsController, 'update'])
    router.delete('/events/:id', [EventsController, 'destroy'])

    // --- Blog ---
    router.post('/blog', [BlogPostsController, 'store'])
    router.put('/blog/:id', [BlogPostsController, 'update'])
    router.delete('/blog/:id', [BlogPostsController, 'destroy'])

    // --- Contato (gestao) ---
    router.get('/contacts', [ContactsController, 'index'])
    router.get('/contacts/:id', [ContactsController, 'show'])
    router.patch('/contacts/:id/read', [ContactsController, 'markAsRead'])
    router.delete('/contacts/:id', [ContactsController, 'destroy'])

    // --- Contribuicoes ---
    router.get('/donations', [DonationsController, 'index'])
    router.get('/donations/:id', [DonationsController, 'show'])
    router.post('/donations', [DonationsController, 'store'])
    router.delete('/donations/:id', [DonationsController, 'destroy'])

    // --- Escola Sabatina ---
    router.post('/escola-sabatina/licoes', [SabbathSchoolController, 'storeLesson'])
    router.put('/escola-sabatina/licoes/:id', [SabbathSchoolController, 'updateLesson'])
    router.delete('/escola-sabatina/licoes/:id', [SabbathSchoolController, 'destroyLesson'])
    router.post('/escola-sabatina/classes', [SabbathSchoolController, 'storeClass'])
    router.put('/escola-sabatina/classes/:id', [SabbathSchoolController, 'updateClass'])
    router.delete('/escola-sabatina/classes/:id', [SabbathSchoolController, 'destroyClass'])

    // --- Ministerios ---
    router.post('/ministerios', [MinistriesController, 'store'])
    router.put('/ministerios/:id', [MinistriesController, 'update'])
    router.delete('/ministerios/:id', [MinistriesController, 'destroy'])

    // --- Noticias ---
    router.post('/noticias', [NewsController, 'store'])
    router.put('/noticias/:id', [NewsController, 'update'])
    router.delete('/noticias/:id', [NewsController, 'destroy'])

    // --- Sermoes ---
    router.post('/sermoes', [SermonsController, 'store'])
    router.put('/sermoes/:id', [SermonsController, 'update'])
    router.delete('/sermoes/:id', [SermonsController, 'destroy'])

    // --- Pedidos de Oracao (gestao) ---
    router.get('/oracoes/todos', [PrayerRequestsController, 'indexAll'])
    router.delete('/oracoes/:id', [PrayerRequestsController, 'destroy'])

    // --- Sobre ---
    router.post('/sobre', [AboutController, 'storeContent'])
    router.put('/sobre/:id', [AboutController, 'updateContent'])
    router.delete('/sobre/:id', [AboutController, 'destroyContent'])
    router.post('/sobre/lideranca', [AboutController, 'storeLeader'])
    router.put('/sobre/lideranca/:id', [AboutController, 'updateLeader'])
    router.delete('/sobre/lideranca/:id', [AboutController, 'destroyLeader'])
  })
  .prefix('/api')
  .use(middleware.auth())
