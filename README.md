# POC_typescript


POC (proof of concept) using typescript

## About

Small application with four routes (CRUD - create, retrieve, update and delete) for development practice using typescript

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4.Create database tables using dump.sql file
5. Configure the `.database` configuration file "connection String:" to connect the postgres database.


```bash
connectionString:`postgresql://USER_POSTGRES:PASSWORD_POSTGRES@localhost:5432/DATABASE_NAME?schema=public`
```

## How to use the application

1- Four routes were created (CRUD) using typescript: use routes.ts file to check route directories
2- To add a new movie, send an object in the body of the request: 


```bash
type Filme = {
    nome: string,
    descricao: string,
    status: boolean,
    plataformaId: number,
    generoId: number
}
```
3- For the get route, send an id of a registered movie to receive the information of the respective movie added:
4-The update route allows you to update the description of the added movie, use the object format:

```bash
type Update = {
    descricao: string,
    filmeId: number
}
```
5- The delete route allows you to delete an already registered movie using the respective movie ID

```bash
type Delete = {
      filmeId:Number
}
```

