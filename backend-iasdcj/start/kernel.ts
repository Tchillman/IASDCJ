// start/kernel.ts - Versão corrigida

/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'
import cron from 'node-cron'

/**
 * The error handler is used to convert an exception
 * to an HTTP response.
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * The server middleware stack runs middleware on all the HTTP
 * requests, even if there is no route registered for
 * the request URL.
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

/**
 * The router middleware stack runs middleware on all the HTTP
 * requests with a registered route.
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/auth/initialize_auth_middleware'),
])

/**
 * Named middleware collection must be explicitly assigned to
 * the routes or the routes group.
 */
export const middleware = router.named({
  auth: () => import('#middleware/auth_middleware'),
})

/**
 * Sincronização automática da Escola Sabatina
 * Executa todos os dias à meia-noite
 */

// Função para executar a sincronização
async function runSynchronization() {
  console.log('🔄 Executando sincronizacao diaria da Escola Sabatina...')
  console.log(`📅 Data/Hora: ${new Date().toLocaleString('pt-BR')}`)

  try {
    // Importar o controller dinamicamente
    const { default: SabbathSchoolController } =
      await import('#controllers/sabbath_school_controller')
    const controller = new SabbathSchoolController()

    // Criar um contexto simulado com tipagem correta
    let responseData: any = null

    const mockContext = {
      response: {
        ok: (data: any) => {
          responseData = data
          console.log('✅ Sincronizacao concluida com sucesso!')
          return data
        },
        internalServerError: (error: any) => {
          console.error('❌ Erro na sincronizacao:', error)
          throw error
        },
      },
    }

    // Executar sincronização
    await controller.syncWithCPB(mockContext as any)

    // Verificar se a sincronização foi bem sucedida
    if (responseData && responseData.success !== undefined) {
      console.log(`✅ Sincronizacao concluida: ${responseData.message || 'Sucesso'}`)

      // Contar lições se existirem
      if (responseData.lessons && Array.isArray(responseData.lessons)) {
        const created = responseData.lessons.filter((l: any) => l.action === 'created').length
        const updated = responseData.lessons.filter((l: any) => l.action === 'updated').length
        console.log(`📚 Lições criadas: ${created}`)
        console.log(`🔄 Lições atualizadas: ${updated}`)
      } else {
        console.log('📊 Nenhuma lição foi modificada')
      }
    } else {
      console.log('⚠️ Sincronizacao executada, mas sem dados de retorno')
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
    console.error('❌ Erro na sincronizacao agendada:', errorMessage)

    if (error instanceof Error && error.stack) {
      console.error('📋 Stack trace:', error.stack)
    }
  }

  console.log('🏁 Ciclo de sincronizacao finalizado')
}

// Agendar a execução diária às 00:00 (meia-noite)
// node-cron não aceita opções complexas, apenas o padrão e a função
const syncJob = cron.schedule('0 0 * * *', runSynchronization)

// Iniciar o job (já inicia automaticamente com schedule)
console.log('⏰ Scheduler de sincronizacao da Escola Sabatina iniciado')
console.log('🕐 Configuração: Executar diariamente às 00:00 (horário do servidor)')
console.log('📋 Agendamento configurado com padrão cron: 0 0 * * *')

// Para definir timezone, precisamos ajustar o padrão ou usar outra abordagem
// Exemplo para executar às 00:00 horário de Brasília (UTC-3)
// Como node-cron usa o horário do servidor, certifique-se que o servidor está configurado corretamente

// Opcional: Executar uma vez ao iniciar o servidor (para teste)
// Descomente a linha abaixo se quiser testar imediatamente
// setTimeout(() => {
//   console.log('🧪 Executando sincronizacao de teste...')
//   runSynchronization()
// }, 5000)

// Tratamento para desligamento gracioso
process.on('SIGTERM', () => {
  console.log('📌 Recebido SIGTERM, parando scheduler...')
  syncJob.stop()
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('📌 Recebido SIGINT, parando scheduler...')
  syncJob.stop()
  process.exit(0)
})
