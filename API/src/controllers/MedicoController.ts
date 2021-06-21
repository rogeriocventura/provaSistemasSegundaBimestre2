import {Request, Response} from "express";
import MedicoSchema from "../models/MedicoSchema";


class MedicoController{
    
    async listar(request: Request, response: Response) {
        const medicos = await MedicoSchema.find();
        response.status(200).json(medicos);
      }

    async buscarPorId(request: Request, response: Response) 
    {
        const { id } = request.params;
        const medicos = await MedicoSchema.find({ crm: id });
    response.status(200).json(medicos);
    }
    
    async cadastrar(request: Request, response: Response) {
        try 
        {
            //const crmNovoMedico = request.body.crm
            
            const novoMedico = await MedicoSchema.create(request.body);
            response.status(201).json({
            objeto: novoMedico,
            msg: "Novo medico cadastrado",
            erro: false
            });
        } 
        catch (error) 
        {
            if (error.name === 'MongoError' && error.code === 11000) {
                response.status(400).json({
                objeto: error,
                msg: "Falha na validação!! CRM ja existe no banco",
                erro: true
                });
            }
            else
            {
                response.status(400).json({
                objeto: error,
                msg: "Falha na validação",
                erro: true
                });
            }
            
        }
    }

    async remover(request: Request, response: Response) {
        const { id } = request.params;
        const medicos = await MedicoSchema.deleteOne({ crm: id });
        response.status(200).json(medicos);
    }


    async alterar(request: Request, response: Response) {
        try 
        {
            //const crmNovoMedico = request.body.crm
            
            const novoMedico = await MedicoSchema.updateOne({crm : request.body.crm},request.body);
            response.status(201).json({
            objeto: novoMedico,
            msg: "dados do medico alterados",
            erro: false
            });
        } 
        catch (error) 
        {
            
            response.status(400).json({
            objeto: error,
            msg: "Falha na validação",
            erro: true
            });
        
            
        }
    }
      
}

export {MedicoController};