import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import carrosController from './controller/carrosController.js';
import clienteController from './controller/clienteController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(clienteController);
servidor.use(carrosController);


servidor.listen(process.env.PORT, () => console.log('API subiu: ' + process.env.PORT));