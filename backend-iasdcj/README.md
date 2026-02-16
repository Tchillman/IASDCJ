# IASDCJ API - API Service

API REST para o sistema de e-commerce Nazunga, desenvolvida com Node.js, TypeScript, AdonisJS e Lucid ORM.

## Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **AdonisJS** - Framework web robusto para Node.js
- **Lucid ORM** - ORM padrão do AdonisJS (Active Record)
- **PostgreSQL** - Base de dados relacional

## Pré-requisitos

- Node.js v18 ou superior
- PostgreSQL instalado e a correr
- npm ou yarn

## Instalação

1. **Clonar o repositório e instalar dependências:**

```bash
cd api
npm install
```

2. **Configurar variáveis de ambiente:**

Copie o ficheiro `.env.example` para um novo ficheiro `.env`:

```bash
cp .env.example .env
```

Edite o ficheiro `.env` com as suas configurações:

```env
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=  # Será gerada no passo seguinte
NODE_ENV=development

# Configuração da Base de Dados
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=iasdcj
```

3. **Gerar a Chave da Aplicação:**

```bash
node ace generate:key
```

## Configuração da Base de Dados

### 1. Criar a Base de Dados

Certifique-se de que a base de dados especificada em `DB_DATABASE` (ex: `iasdcj`) existe no PostgreSQL. Pode criar manualmente:

```sql
CREATE DATABASE iasdcj;
```

### 2. Executar as Migrations

Para criar as tabelas na base de dados, execute:

```bash
node ace migration:run
```

## Executar o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

O servidor irá iniciar em `http://localhost:3333` com hot-reload (HMR) ativado.

### Modo de Produção

```bash
npm run build
npm start
```

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento com HMR |
| `npm run build` | Compila o projeto para JavaScript na pasta `build` |
| `npm start` | Inicia o servidor compilado (produção) |
| `npm run test` | Executa os testes (Japa) |
| `npm run lint` | Executa o linter (ESLint) |
| `npm run format` | Formata o código (Prettier) |

## Comandos Adonis (Ace) Úteis

| Comando | Descrição |
|---------|-----------|
| `node ace list` | Lista todos os comandos disponíveis |
| `node ace migration:run` | Executa as migrações pendentes |
| `node ace migration:rollback` | Reverte o último lote de migrações |
| `node ace make:controller [Nome]` | Cria um novo controlador |
| `node ace make:model [Nome]` | Cria um novo modelo |
| `node ace make:migration [Nome]` | Cria uma nova migração |
| `node ace route:list` | Lista todas as rotas registadas |

## Estrutura do Projeto

```
api/
├── app/
│   ├── controllers/     # Controladores HTTP E Logica do negocio
│   ├── models/          # Modelos de Dados (Lucid)
│   ├── middleware/      # Middlewares
│   └── exceptions/      # Tratamento de erros
├── config/              # Ficheiros de configuração
├── contracts/           # Definições de tipos e interfaces
├── database/
│   └── migrations/      # Histórico de migrações
├── start/               # Ficheiros de inicialização (rotas, kernel)
├── bin/                 # Scripts de entrada (server, console)
├── tests/               # Testes automatizados
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configuração do TypeScript
└── .env                 # Variáveis de ambiente (não commitado)
```



## Resolução de Problemas

### Erro de conexão com a base de dados

1. Verifique se o PostgreSQL está a correr.
2. Confirme se as credenciais (HOST, PORT, USER, PASSWORD) no `.env` estão corretas.
3. Verifique se a base de dados (`DB_DATABASE`) foi criada.

### Erro "relation does not exist"

Execute as migrações para garantir que as tabelas existem:

```bash
node ace migration:run
```

## Licença

UNLICENSED
