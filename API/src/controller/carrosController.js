import { Router } from 'express';
import { listarCarros, adicionarCarro} from '../repository/carrosRepository.js';

let endpoints = Router();

endpoints.post('/veiculo', async (req, resp) => {
    let veiculos = req.body;
    let dados = await adicionarCarro(veiculos);
    resp.send(dados);
})

endpoints.get('/veiculo', async (req, resp) => {
    let dados = await listarCarros();
    resp.send(dados);
})


export default endpoints