
function entrar() {

    var emailVar = inputEmail.value;
    var senhaVar = inputSenha.value;

    if (emailVar == "" || senhaVar == "") {
        return false;
    }


    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log(resposta);

        if (resposta.ok) {
            
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nomeusuario;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.MES_FERIAS = json.mesFerias;
                sessionStorage.TIPO_VIAGEM = json.tipoviagem;
                sessionStorage.DESTINO = json.localidade;

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login efetuado !',
                    showConfirmButton: false
                })
                setTimeout(function () {
                    window.location = "../dashboard/dashboard.html";
                }, 1500); // apenas para exibir o loading

            });

        } else {
            
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Cadastro não efetuado, verifique a senha e o email !',
                showConfirmButton: false
            })
        }
    })

    return false;
}
