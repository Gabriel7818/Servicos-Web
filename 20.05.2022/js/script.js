function cep(){
    var cep = document.getElementById("CEP").value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var servico = new XMLHttpRequest(); // XMLHttpRequest é uma classe para Javascript

    servico.open('GET', url); // GET abre o site informado em (var url, url)

    servico.onerror = function(e){
        document.getElementById("Endereco").innerHTML = "CEP não encontrado";
    }

    // alert(servico.onerror);

    servico.onload = () =>{ // O que acontece depois de carregado (servico.open)
        var resposta = JSON.parse(servico.responseText);
        if(resposta.erro == true){ // Mensagem que vai aparecer quando o CEP estiver inválido
            document.getElementById('Endereco').innerHTML = "CEP não encontrado"
        }
        else{ // Caso o CEP esteja correto 
            document.getElementById('Endereco').innerHTML =
            "CEP: " + resposta.cep + '<br>' +
            "Logradouro: " + resposta.logradouro + '<br>' +
            "Bairro: " + resposta.bairro;
        }

        
    }
    servico.send(); // Fim da requisição
}