# 🔗 EasyLink - Encurtador de URLs

Um projeto backend para encurtar links.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🚀 Funcionalidades

- Encurtamento Customizado: Permite que o usuário defina o seu próprio shortCode (apelido) para a URL.
- Redirecionamento Automático: Sistema de busca rápida que encaminha o usuário para o destino original.
- Contagem de Acessos: Incremento atômico de cliques para métricas de uso em tempo real.
- Persistência Relacional: Gerenciamento de dados via Sequelize com suporte a PostgreSQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🛠️ Tecnologias Utilizadas

- Linguagem:      JavaScript
- Plataforma:     Node.js
- Framework:      Fastify
- ORM:            Sequelize
- Banco de Dados: PostgreSQL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- Node.js 
- PostgreSQL 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔧 Instalação e Execução

### IMPORTANTE!!

   Sugestão de configuração para o .env:

    port_db=Porta_do_db
    database_db=EasyLink
    username_db=seu_usuario
    password_db=sua_senha

   Este banco ja deve existir ou deve ser criado antes de executar o passo 4.

1. Clone o repositório:

   git clone https://github.com/RenatoBeltrao/EzLink

2. Instale as dependências:

   npm install

3. Configure o Banco de Dados:

   Certifique-se de que as credenciais no seu arquivo de conexão (ou .env)
   estão apontando para o seu banco Postgres local.
   

4. Execute a aplicação:

   `npm run dev`

   O servidor iniciará em: http://localhost:3333
   
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🛣️ Endpoints da API

  Método  | Rota          | Descrição
  --------|---------------|---------------------------------------------------
  POST    | /link/create      | Cria um novo link encurtado.
  GET     | /link/access/:shortCode   | Redireciona para a URL original e soma +1 clique.
  GET     | /link/list       | Lista todos os registros salvos.
  PUT     | /link/update/:id    | Atualiza as informações de um link existente.
  DELETE  | /link/delete/:id    | Remove um link do banco de dados.

Exemplo de Payload (POST /create):

  {
        "url": "https://www.google.com",
        "shortCode": "google"
  }

Retornando algo como:

    {
        "id": "891d493f-23a1-4273-a660-55b02520bc73",
        "clicks": 0,
        "url": "https://www.google.com",
        "shortCode": "google",
        "atualizado_em": "2026-04-06T23:54:10.108Z",
        "criado_em": "2026-04-06T23:54:10.108Z"
    }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desenvolvido por Renato Moreira Beltrão Filho
