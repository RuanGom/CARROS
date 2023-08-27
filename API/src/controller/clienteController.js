import { Router } from 'express';
import { adicionarCliente,listarClientes } from '../repository/clienteRepository.js';

let endpoints = Router();

endpoints.post('/cliente', async (req, resp) => {
    let clientes = req.body;
    let dados = await adicionarCliente(clientes);
    resp.send(dados);
})

endpoints.get('/cliente', async (req, resp) => {
    let dados = await listarClientes();
    resp.send(dados);
})

export default endpoints