function moeda(){
    var moeda = document.getElementById("Moeda").value;
    var url = 'https://economia.awesomeapi.com.br/json/last/' + moeda;
    var servico = new XMLHttpRequest(); // XMLHttpRequest é uma classe para Javascript

    servico.open('GET', url); // GET abre o site informado em (var url, url)

    servico.onerror = function(e){
        document.getElementById("Cotação").innerHTML = "Cotação não encontrada";
    }

    servico.onload = () =>{ // O que acontece depois de carregado (servico.open)
        var resposta = JSON.parse(servico.responseText);
        var moeda2 = moeda + 'BRL';
        console.log(moeda2);
        if(resposta.erro == true){ // Mensagem que vai aparecer quando o CEP estiver inválido
            document.getElementById('Cotação').innerHTML = "Cotação não encontrada"
        }
        else{ // Caso o CEP esteja correto
            var moeda2 = moeda + 'brl';
            document.getElementById('Cotação').innerHTML =
            "Codigo da Moeda: " + resposta.moeda2.code + '<br>';
            // "Nome: " + resposta.moeda2.name + '<br>' +
            // "Alta: " + resposta.moeda2.high + '<br>' +
            // "Baixa: " + resposta.moeda2.low;
        }   
    }

    servico.send(); // Fim da requisição
}