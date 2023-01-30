import joi from "joi";

export const filmesPostModel = joi.object({
    "nome": joi.string().required(),
    "descricao": joi.string().required(),
    "status": joi.boolean().required(),
    "plataformaId": joi.number().required(),
    "generoId": joi.number().required()
})

export const updateFilmeModel = joi.object({
    "descricao": joi.string().required(),
    "filmeId": joi.number().required()
})

export const deleteFilmeModel = joi.object({
    "filmeId": joi.number().required()
})