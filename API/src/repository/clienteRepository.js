import conexao from './connection.js';

export async function listarClientes(){
    let sql = "select * from tb_cliente;"

    let resp = await conexao.query(sql);
    let dados = resp [0]
    return dados
}

export async function adicionarCliente(cliente){
    let sql ='insert into tb_cliente(nm_cliente,ds_email,ds_telefone,ds_cpf,ds_cnh) values (?,?,?,?,?)'

    let [resp] = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh ]);
    

    cliente.id = resp.insertId
    return cliente;
}