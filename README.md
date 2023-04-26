#BLOG API

## Sobre Projeto

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

- Foi desenvolvido uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

- Foi desenvolvido endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

- Foi exigido que o usuário fizesse login para criar um post, o que levou a uma conexão entre o usuário e o post.

- Foi trabalhado a relação de posts para categories e de categories para posts.

## Habilidades Desenvolvidas:

- Desenvolvimento de API: habilidade para criar endpoints seguindo as práticas RESTful;
- Banco de dados: habilidade para projetar e implementar um banco de dados;
- Programação com Sequelize: habilidade para usar o pacote Sequelize para criar operações de CRUD;
- Autenticação e autorizaçã;
- Relacionamento de entidades;

## Métodos utilizados:

- Sequelize(CRUD);
- Node.js;
- Express;
- MSQL;
- Docker;

 
 ## Como executar:
 
 ```bash
 # clone o repositorio
 
- git clone git@github.com:bruna270498/Project-Tryunfo.git

# Rode os serviços node e db

- docker-compose up -d --build

# Entre no docker

- docker exec -it blogs_api bash

# Instale as dependências

- npm install.

# Rode o comando

- npm run dev

# Sem docker

- env $(cat .env) npm run dev

```
