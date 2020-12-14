
## Descrição

Aplicação de uma API Rest simples e introdutória que possui um CRUD para fazendeiros, fazendas, vacas e cavalos desenvolvida durante os meus estudos introdutórios ao framework [Nest.js](https://github.com/nestjs/nest).
Durante os estudos aprofundei e aprendi conceitos e funcionalidades do [Typecript](https://www.typescriptlang.org/), Repository Pattern, [TypeORM](https://typeorm.io/#/) e a arquitetura sugerida pelo
[Nest.js](https://github.com/nestjs/nest) para o desenvolvimento das aplicações, com services, entities, controllers e modules.

## Techs

- [Nest.js](https://github.com/nestjs/nest)
- [Typecript](https://www.typescriptlang.org/)
- [MySql](https://www.mysql.com/)
- [TypeORM](https://typeorm.io/#/)
- [class-validator](https://github.com/typestack/class-validator)
- [Helmet](https://helmetjs.github.io/)

# Execução da aplicação

## Duplicar o arquivo .env.example e renomear para .env

- Com a finalidade de armazenar as variáveis de ambiente 

## Criação do banco de dados [MySql](https://www.mysql.com/)

- Criar o banco de dados na linha de comando (ou pelo phpmyadmin) do mysql com o nome:

```bash
$  CREATE DATABASE nestjs_farms_api_db;
```

- Adicionar o nome do usuário e senha no arquivo .env

## Instalação das dependências

```bash
$ yarn
```

## Scripts para execução

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
