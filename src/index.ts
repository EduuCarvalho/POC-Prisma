import express from "express";
import routes from "./routes/routes.js"


const app = express();
app.use(express.json());
app.use(routes);

app.listen(4000, ()=>{
console.log(`Server is up and running!!!`)
});


// BANCO
// FILMES
//"id" SERIAL PRIMARY KEY,
// "nome" VARCHAR(30) UNIQUE NOT NULL,
//"descricao" VARCHAR(500),
//"status" BOOLEAN NOT NULL DEFAULT FALSE,
//"plataformaId" INTEGER NOT NULL REFERENCES "plataforma"("id"),
//"generoId" INTEGER NOT NULL REFERENCES "genero"("id")


// plataforma
//"id" SERIAL PRIMARY KEY,
//"nome" VARCHAR(30) UNIQUE NOT NULL


// genero
//"id" SERIAL PRIMARY KEY,
//"nome" VARCHAR(30) NOT NULL,