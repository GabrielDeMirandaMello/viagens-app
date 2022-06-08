

function enviarHistoria() {
    var nome = input_nome.value
    var url = input_imagem.value
    var descricao = historia_texto.value
    var id_usuario = sessionStorage.ID_USUARIO

    if (nome.length == 0 && url.length == 0) {
        input_imagem.style.borderColor = "red"
        input_nome.style.borderColor = "red"
        historia_texto.style.borderColor = "red"
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: 'Historia não Regitrada !',
            showConfirmButton: false,
            timer: 2000
        })
    } else if (nome.length == 0) {
        input_imagem.style.borderColor = "red"
        input_nome.style.borderColor = "red"
        historia_texto.style.borderColor = "red"
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: 'Nome não informado !',
            showConfirmButton: false,
            timer: 2000
        })
    } else if (url.length == 0) {
        input_imagem.style.borderColor = "red"
        input_nome.style.borderColor = "red"
        historia_texto.style.borderColor = "red"
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: 'URL não informada !',
            showConfirmButton: false,
            timer: 2000
        })
    } else if (descricao.length == 0) {
        input_imagem.style.borderColor = "red"
        input_nome.style.borderColor = "red"
        historia_texto.style.borderColor = "red"
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: 'Descricao não informada !',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
        input_imagem.style.borderColor = ""
        input_nome.style.borderColor = ""
        historia_texto.style.borderColor = ""
        
        fetch("/usuarios/cadastrarHistoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                idServer: id_usuario,
                nomeServer: nome,
                urlServer: url,
                descricaoServer: descricao
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'success',
                    title: 'Historia Registrada !       Verifique o grafico na tela de Inicio !',
                    showConfirmButton: false,
                    timer: 3000
                })
                setTimeout(function () {
                    (window.location = "historias.html")
                }, 2000);
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }

    
}

function calcularCaracter() {
    var valorCaracter = historia_texto.value
    caracter.innerHTML = valorCaracter.length
}
