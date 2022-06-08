const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))

var nome = sessionStorage.NOME_USUARIO

nomeUsuario.innerHTML = `Olá ${nome}, <br>seja Bem Vindo!`

function listar() {
    var id_usuario = sessionStorage.ID_USUARIO
    fetch("/usuarios/listar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idServer: id_usuario
        })
    }).then(function (resposta) {
        console.log(resposta)
    }).catch(function (erro) {
        console.log(erro + 'deu merda')
    })
}

// Parte de gastos
function CalcularGasto() {
    var km_viagem = input_km_viagem.value
    var km_carro = input_km_carro.value
    var tipo_combustivel = select_tipo_combustivel.value

    
    var gasto_carro = km_viagem / km_carro
    
    var gasto_total_consumo = 0

    if (tipo_combustivel == 1) {
        var gasolina = gasto_carro * 6.93
        gasto_total_consumo = gasolina
    } else if (tipo_combustivel == 2) {
        var alcool = gasto_carro * 4.95
        gasto_total_consumo = alcool
    } else {
        var gnv = gasto_carro * 4.16
        gasto_total_consumo = gnv
    }
    if (gasto_total_consumo >= 0) {
        gasto_total.innerHTML = ` ${gasto_total_consumo.toFixed(2)}`
    } else {
        gasto_total.innerHTML = 0
    }
    
}

function limpar() {
    gasto_total.innerHTML = 0
    input_km_viagem.value = ''
    input_km_carro.value = ''
}
//sessoes 

function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}