function moeda(){
    var moeda = document.getElementById("Moeda").value;
    var url = 'https://economia.awesomeapi.com.br/json/last/' + moeda;
    var servico = new XMLHttpRequest(); // XMLHttpRequest é uma classe para Javascript
    const moedas = () => {
        USDBRL;
        EURBRL;
        BTCBRL;
    }

    servico.open('GET', url); // GET abre o site informado em (var url, url)

    servico.onerror = function(e){
        document.getElementById("Cotação").innerHTML = "Cotação não encontrada";
    }

    servico.onload = () =>{ // O que acontece depois de carregado (servico.open)
        var resposta = JSON.parse(servico.responseText);
        
        var chave = Object.keys(resposta);
        console.log(chave[0]);        
        if(resposta.erro == true){ // Mensagem que vai aparecer quando o CEP estiver inválido
            document.getElementById('Cotação').innerHTML = "Cotação não encontrada"
        }
        else{ // Caso o CEP esteja correto
            document.getElementById('Cotação').innerHTML =
            "Codigo da Moeda: " + resposta[chave[0]].code + '<br>' +
            "Nome: " + resposta[chave[0]].name + '<br>' +
            "Alta: " + resposta[chave[0]].high + '<br>' +
            "Baixa: " + resposta[chave[0]].low;
        }   
    }

    servico.send() // Fim da requisição
}