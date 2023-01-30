import connectionDB from "../database/database.js";


export async function postFilmes(nome: string, descricao: string, status : boolean, plataformaId: number, generoId: number) {
        return connectionDB.query(
            `INSERT INTO filmes (nome,descricao,status,"plataformaId", "generoId") VALUES ($1,$2,$3,$4,$5);`,[nome,descricao,status,plataformaId,generoId]
            )

}

export async function getFilmes(filmeId: Number){
    return connectionDB.query(
        `SELECT * from filmes WHERE filmes.id=$1;`,[filmeId]
    );
}


export async function updateDescription (newDescription:String,filmeId: Number) {
    return connectionDB.query(
        `UPDATE filmes SET descricao=$1 WHERE filmes.id=$2;`,[newDescription,filmeId]
    )
}

export async function deleteFilme(deleteId:Number){

    return connectionDB.query(
        `DELETE FROM filmes WHERE id=$1;`,[deleteId]
    )
}