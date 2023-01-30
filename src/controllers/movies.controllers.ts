import { Request, Response } from "express"
import { postFilmes, getFilmes, updateDescription,deleteFilme, showAll } from "../repositories/filmesRepository.js";


type Filme = {
    nome: string,
    descricao: string,
    status: boolean,
    plataformaId: number,
    generoId: number
}
export async function getAllMovies(req: Request, res: Response){
    const filmes = await showAll();
    return res.status(200).send(filmes);

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
        const filme = await getFilmes(numberId);
        res.status(200).send(filme);
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
        filmeId:number
}

export async function deleteFilmeById (req:Request, res:Response) {

    const deleteId = req.body as Delete;

    try{
        await deleteFilme(deleteId.filmeId)

        res.status(200).send("Filme deletado com sucesso!!!")
    }catch(err){
        res.status(500).send(err.message)
    }

}