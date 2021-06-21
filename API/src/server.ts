import express from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

const app = express();
const db = mongoose;


console.clear();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
app.use(express.json())
app.set('port',1234);
app.listen(app.get('port'))
app.use(router);


app.listen(3000, () => {
  console.log("O servidor está rodando...");
});