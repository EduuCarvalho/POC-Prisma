import { NextFunction, Request,Response } from "express";
import { deleteFilmeModel, filmesPostModel, updateFilmeModel } from "../models/filmesModel.js";

export async function filmesPostValidations(req: Request,res: Response,next:NextFunction) {
        const { error } = filmesPostModel.validate(req.body,{abortEarly:false});

        if(error) return res.status(422).send(error.details.map(detail=> detail.message));

        next()

}   

export async function updateFilmeValidation(req:Request, res:Response, next:NextFunction) {
        const { error } = updateFilmeModel.validate(req.body,{abortEarly:false});

        if(error) return res.status(422).send(error.details.map(detail=> detail.message));

        next()

}

export async function deleteFilmeValidation (req:Request, res:Response, next:NextFunction){

        const { error } = deleteFilmeModel.validate(req.body,{abortEarly:false});

        if(error) return res.status(422).send(error.details.map(details=>details.message));

        next()
}