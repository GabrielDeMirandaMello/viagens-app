var database = require("../database/config");

function listar() {
    var instrucao = `
        select nome, urlImagem, descricao from historia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarhistorico(id_usuario) {
    var instrucao = `
        select nome, urlImagem, descricao from historia where fk_idusuario = ${id_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarhistorico
}
