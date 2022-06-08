var database = require("../database/config");

function listarDados(id_usuario) {
    var instrucao = `
        select count(id) as total_historia from historia where fk_idusuario = ${id_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function AtualizarDados() {
    var instrucao = `
        select count(id) as total_historia from historia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listarDados,
    AtualizarDados
}
