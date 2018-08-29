var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json' // Adicionado para informar que estamos enviando uma requisição com um json como argumento.
    }
};

// O http.client vai retornar um objeto
var client = http.request(configuracoes, function(response){
    console.log(response.statusCode);
    response.on('data', function(body) {
        console.log('Corpo' + body);
    });
});

//Criaremos a variavel produto com o json para ser enviado como argumento da funcão.
var produto = {
    titulo: 'Node o servidor poderoso',
    descricao: 'Curso que vai mudar nossa vida',
    preco: '67.90'
}


// Para a requisição ser enviada é necessário chamar o método end.
// client.end(produto); // Aqui seria enviado o objeto literal.
client.end(JSON.stringify(produto)); // Utlizamos a variável JSON com o método Stringfy para enviar JSON e não o objeto literal.