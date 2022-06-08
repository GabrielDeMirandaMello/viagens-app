var total_viagens_usuario = Number(sessionStorage.TOTAL_HISTORIA)
var total_viagens_site = Number(sessionStorage.TOTAL_SITE)



function dateBuilder(d) {
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  let day = days[d.getDay()]; //pegar dia: 0-6
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${year}`;
}
function DadosGrafico() {
  var id_usuario = sessionStorage.ID_USUARIO
  fetch("/dados/listarDados", {
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
        var total = resposta[0].total_historia;
        sessionStorage.TOTAL_HISTORIA = total
        
        if (total < 2) {
          qtd_viagens.innerHTML = "Você Tem Poucas Viagens"
          qtd_viagens.style.backgroundImage = "linear-gradient(#ce0303, #F2F2F2, #ce0303)"
        } else if (total < 4) {
          qtd_viagens.innerHTML = "Você Tem Muitas Viagens"
          qtd_viagens.style.backgroundImage = "linear-gradient(#2dd603, #F2F2F2, #2dd603)"
        } else {
          qtd_viagens.innerHTML = "Você é Ricoooo !!!!!!!"
          qtd_viagens.style.backgroundImage = "linear-gradient(#dbd801, #F2F2F2, #dbd801)"
        }
        setTimeout(() => DadosGrafico(), 2000)
      });
    } else {
      throw ('Houve um erro na API!');

    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}

function grafico1() {
  
  let now = new Date();
  var mes = dateBuilder(now);
  
  const labels = [
    `${mes}`
  ];

  const dados = {
    labels: labels,
    datasets: [{
      label: 'Historias',
      backgroundColor: 'blue',
      borderColor: 'rgb(0,0,205)',
      data: []
    }]
  };
  var config = {
    type: 'bar',
    data: dados,
    options: {
      animation: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 10
          }
      },
      plugins: {
        tooltip: {
          usePointStyle: true
        }
      }
    }
    
  }; 
  var ctx = myChart.getContext('2d');
  window.myChart = new Chart(
    document.getElementById('myChart'),
    config,
    ctx
  );
  
  AtualizarGrafico1(dados)
}

function grafico2() {
  const data = {
    labels: ['Viagens de outras Pessoas em %','Suas Viagens em %'],
    datasets: [{
      label: '',
      data: [],
      animation: true,
      backgroundColor: [
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'pie',
    data: data,
  };
  var ctx = myChart2.getContext('2d');
  window.myChart2 = new Chart(
    document.getElementById('myChart2'),
    config,
    ctx
  );
  AtualizarGrafico2(data)
}


function AtualizarGrafico1( dados) {
  
  fetch("/dados/AtualizarDados").then(function (resposta) {
    
    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        console.log('Aqui' + JSON.stringify(dados));
        dados.datasets[0].data.shift();
        dados.datasets[0].data.push(sessionStorage.TOTAL_HISTORIA);

        window.myChart.update();
        setTimeout(() => AtualizarGrafico1( dados), 2000)
      });
    } else {
      throw ('Houve um erro na API!');

    }
  }).catch(function (resposta) {
    console.error(resposta);
  });

}

function AtualizarGrafico2(data) {

  fetch("/dados/AtualizarDados").then(function (resposta) {

    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        
        sessionStorage.TOTAL_SITE = resposta[0].total_historia;
        
        console.log('Aqui' + JSON.stringify(data));
        var dado1 = (((sessionStorage.TOTAL_SITE - sessionStorage.TOTAL_HISTORIA) / sessionStorage.TOTAL_SITE) * 100).toFixed(0);
        var dado2 = ((sessionStorage.TOTAL_HISTORIA / sessionStorage.TOTAL_SITE) * 100).toFixed(0);
        data.datasets[0].data.shift();
        data.datasets[0].data.shift();
        data.datasets[0].data.push(dado1);
        data.datasets[0].data.push(dado2);
        

        window.myChart2.update();
        setTimeout(() => AtualizarGrafico2(data), 2000)
      });
    } else {
      throw ('Houve um erro na API!');

    }
  }).catch(function (resposta) {
    console.error(resposta);
  });

}