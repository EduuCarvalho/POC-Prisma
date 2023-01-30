-- CreateTable
CREATE TABLE "filmes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "descricao" VARCHAR(500),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "plataformaId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genero" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,

    CONSTRAINT "genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plataforma" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,

    CONSTRAINT "plataforma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "filmes_nome_key" ON "filmes"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "plataforma_nome_key" ON "plataforma"("nome");

-- AddForeignKey
ALTER TABLE "filmes" ADD CONSTRAINT "filmes_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "genero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "filmes" ADD CONSTRAINT "filmes_plataformaId_fkey" FOREIGN KEY ("plataformaId") REFERENCES "plataforma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
