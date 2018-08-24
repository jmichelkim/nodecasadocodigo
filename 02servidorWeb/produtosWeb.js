// Criando servidor WEB


// Passo 1 - Criar o servidor web, porém ele não trava o terminal nem escuta a porta 3000.

// var http = require('http');

// http.createServer();

// console.log('Servidor on line...');


// Passo 2 - Ensinar ao node escutar a porta 3000 - Observe que já trava o terminal.

// var http = require('http');

// var server = http.createServer();

// server.listen(3000);

// console.log('Servidor on line...');


// Passo 3 - Ensinar ao servidor a receber e responder a uma requisição

var http = require('http');

var server = http.createServer(function(req, res){
    res.end("<html><body><h3>Primeiro Servidor WEB</h3><body><html>");
});

server.listen(3000);

console.log('Servidor na porta 3000: on line...');

