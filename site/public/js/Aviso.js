function listarHistorias() {
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    console.log(publicacao)
                    inserir_card.innerHTML += `
                    <div class="card" style="margin-bottom: 40px;">
                        <img class="img_background" src="${publicacao.urlImagem}" alt="">
                        <div class="historia">
                            <span>${publicacao.descricao}</span><br>
                            <span>Relado De: <b>${publicacao.nome}</b></span>
                        </div>
                    </div>
                    `
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function listarHistoriasProprias() {
    var id_usuario = sessionStorage.ID_USUARIO
    fetch("/avisos/listar1", {
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
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    console.log(publicacao)
                    inserir_card.innerHTML += `
                    <div class="card_historia" style="margin-bottom: 40px;">
                        <img class="img_background" src="${publicacao.urlImagem}" alt="">
                        <div class="historia">
                            <span>${publicacao.descricao}</span><br>
                            <span>Relado De: <b>${publicacao.nome}</b></span>
                        </div>
                    </div>
                    `
                }
                
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

