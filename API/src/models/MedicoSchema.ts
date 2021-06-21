import { model, Schema } from "mongoose";

const medicoSchema = new Schema(
    {
        nome: 
        {
            type: String,
            required: [true, "O campo NOME do treinador é obrigatório!!"]
        },
        crm: 
        {
            type: String,
            required: [true, "O campo CRM do treinador é obrigatório!!"],
            unique: true
        },
        especialidade: 
        {
            type: String,
            required: [true, "É necessário definir a especialidade do medico!!"]
        }
    },
    {
        timestamps:true
    }

);

export default model("medicos",medicoSchema);