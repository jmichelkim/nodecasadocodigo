var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json' // O que a aplicação espera de resposta do servidor. Caso não exista o header, o node vai responder o html.
    }
};

http.get(configuracoes, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) { //res.on() é para visualizar o corpo da resposta.
        console.log('Corpo:' + body);
    });
});