import { Router, Request, Response } from "express";
import { MedicoController } from "../controllers/MedicoController";
const router = Router();
const medicoController = new MedicoController();


router.get("/", (request: Request, response: Response) => {
    response.send("arquivo de rotas testando");
});


//cadastrar novo medico
router.post("/medico/cadastrar", medicoController.cadastrar);

//buscar medico por crm
router.get("/medico/buscar/:id", medicoController.buscarPorId);

//listar todos medicos
router.get("/medico/listar", medicoController.listar);

//alterar medico
router.put("/medico/alterar", medicoController.alterar);

//excluir medico por crm
router.delete("/medico/remover/:id", medicoController.remover);  


export { router };

