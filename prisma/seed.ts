import prisma from "../src/database/database.js";

async function main (){
    
    await prisma.genero.createMany({
        data: [
            {
                nome:"terror"
            },
            {
                nome:"comédia"
            },
            {
                nome:"ação"
            },
            {
                nome:"drama"
            },
            {
                nome:"aventura"
            },
            {
                nome:"romance"
            },
        ]
    })

    await prisma.plataforma.createMany({
        data: [
            {
                nome:"netflix"
            },
            {
                nome:"prime video"
            },
            {
                nome:"HBO max"
            },
            {
                nome:"disney plus"
            },
            {
                nome:"globo play"
            },
            {
                nome:"telecine"
            },
        ]
    })


    await prisma.filmes.createMany({
        data: [
            {
                nome: "Avatar 2",
                descricao: "Bichos azuis, enormes e legais",
                status: true,
                plataformaId: 1,
                generoId: 3
            },
            {
                nome: "Dracula, morto mas feliz",
                descricao: "Filme engraçado e muito muito antigo",
                status: true,
                plataformaId: 2,
                generoId: 4
            },
            {
                nome: "Procurando Nemo",
                descricao: "Peixe doido alucinado",
                status: true,
                plataformaId: 3,
                generoId: 3
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registros feitos com sucesso!")
})
.catch((e) => {
    console.log(e);
    process.exit(1)
})
.finally(async() => {
    await prisma.$disconnect();
})