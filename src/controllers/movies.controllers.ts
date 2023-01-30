import { Request, Response } from "express"
import { ResultQueryMeta } from "postgres";
import { postFilmes, getFilmes, updateDescription,deleteFilme } from "../repositories/filmesRepository.js";


type Filme = {
    nome: string,
    descricao: string,
    status: boolean,
    plataformaId: number,
    generoId: number
}

export async function getHealth(req: Request, res: Response) {
    res.send("OK")
};

export async function postFilme(req: Request, res: Response) {
    const filme = req.body as Filme;

    try {
        await postFilmes(filme.nome, filme.descricao, filme.status, filme.plataformaId, filme.generoId)

        res.status(200).send("Post feito com sucesso!")
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getFilmeById(req:Request,res:Response) {

    const {id} = (req.params);
  
    const numberId = parseInt(id);
  
     try{
        const {rows} = await getFilmes(numberId);
        res.send(rows);
     }catch (err) {
        res.status(500).send(err.message);
     }
}


type Update = {
    descricao: string,
    filmeId: number
}


export async function updateFilmDescription (req:Request, res:Response) {

const updateFilme = req.body as Update;

    try{
        await updateDescription(updateFilme.descricao, updateFilme.filmeId)

        res.status(200).send("Descrição atualizada com sucesso!!!")
    }catch (err){
        res.status(500).send(err.message)
    }
}

type Delete = {
        filmeId:Number
}

export async function deleteFilmeById (req:Request, res:Response) {

    const deleteId = req.body as Delete;

    try{
        await deleteFilme(deleteId.filmeId)

        res.status(200).send("Filme delettado com sucesso!!!")
    }catch(err){
        res.status(500).send(err.message)
    }

}