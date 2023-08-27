import conexao from './connection.js';

export async function listarCarros(){
    let sql = "select * from tb_veiculo;"

    let resp = await conexao.query(sql);
    let dados = resp [0]
    return dados
}


export async function adicionarCarro(carros){
    let sql ='insert into tb_veiculo(nm_modelo,ds_marca,ds_ano,ds_placa,id_tipo) values (?,?,?,?,?)'

    let [resp] = await conexao.query(sql, [carros.modelo, carros.marca, carros.ano, carros.placa, carros.tipo  ]);
    

    carros.id = resp.insertId
    return carros;
}



