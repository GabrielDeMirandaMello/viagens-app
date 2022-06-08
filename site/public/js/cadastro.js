function proximo() {
    etapa0.style.display = "none"
    etapa1.style.display = ""

}
function VoltarInicio() {
    etapa0.style.display = ""
    etapa1.style.display = "none"
}
function cadastro() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Cadastro efetuado com sucesso !',
        showConfirmButton: true
    })
}
function cadastrar() {
    var nome = inputNome.value
    var email = inputEmail.value
    var senha = inputSenha.value
    var tipoViagem = ComboBox.value
    var CidadeDesejada = Cidade.value
    var mesFerias = ComboBox2.value


    if (nome == 0 && email == 0 && senha == 0) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Cadastro não efetuado, Verifique os campos e digite novamente !',
            showConfirmButton: true
        })
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                tipoViagemServer: tipoViagem,
                localidadeServer: CidadeDesejada,
                mesFeriasServer: mesFerias,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cadastro efetuado com sucesso !',
                    showConfirmButton: false
                })
                setTimeout(function () {
                    (window.location = "./login.html")
                }, 2000);
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
}