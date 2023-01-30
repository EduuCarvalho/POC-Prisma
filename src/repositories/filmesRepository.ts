import prisma from "../database/database.js";


export async function showAll(){
        return prisma.filmes.findMany({
            select:{
                nome:true,
                descricao:true,
                status:true,
                genero:true,
                plataforma:true,
            }

        })
}


export async function postFilmes(nome: string, descricao: string, status : boolean, plataformaId: number, generoId: number) {
        return prisma.filmes.create({
            data:{nome,
            descricao,
            status,
            plataformaId,
            generoId
}})
        
        
        /* connectionDB.query(
            `INSERT INTO filmes (nome,descricao,status,"plataformaId", "generoId") VALUES ($1,$2,$3,$4,$5);`,[nome,descricao,status,plataformaId,generoId]
            ) */

}

export async function getFilmes(filmeId: number){
    return prisma.filmes.findMany({
        where:{
            id: filmeId,
        }
    })
    
/*     connectionDB.query(
        `SELECT * from filmes WHERE filmes.id=$1;`,[filmeId] */
    
}


export async function updateDescription (newDescription:string,filmeId: number) {
    return prisma.filmes.update({
        where:{
            id:filmeId,
            
        },
        data:{
            descricao: newDescription,
        }
    })
}
    /* connectionDB.query(
        `UPDATE filmes SET descricao=$1 WHERE filmes.id=$2;`,[newDescription,filmeId]
    )
}
 */
export async function deleteFilme(deleteId:number){
    return prisma.filmes.delete({
        where:{id:deleteId}
    })
    
    /* connectionDB.query(
        `DELETE FROM filmes WHERE id=$1;`,[deleteId]
    ) */
}