import express from "express";
import IntencaoModel from "../models/intencao.model.js";

const intencaoRoute = express.Router();

//Vamos verificar se está logado?
intencaoRoute.post('/create', async (req,res) => {
    try {
        //Verificar como o será passado o usuário logado e sua unidade
        const newIntencao = await IntencaoModel.create(req.body)

        return res.status(201).json(newIntencao);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
});

intencaoRoute.delete('/delete/:id', async (req, res) =>{
   try {
    const { id } = req.params;

    const deletedIntencao = await IntencaoModel.findByIdAndDelete(id);
    return res.status(200).json(deletedIntencao);
    
   } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors)
   } 
}
);

intencaoRoute.get('/', async (req,res) => {
    try {
        //Verificar como o será passado o usuário logado e sua unidade
        const allIntencoes = await IntencaoModel.find()

        return res.status(200).json(allIntencoes);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
});

intencaoRoute.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        //Verificar como o será passado o usuário logado e sua unidade
        const allIntencoes = await IntencaoModel.findById(id)

        return res.status(200).json(allIntencoes);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
});

export default intencaoRoute;