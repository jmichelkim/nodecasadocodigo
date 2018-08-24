
// Antes de utlizar o Express

// var http = require('http');

// var server = http.createServer(function (req, res) {
//     res.end("<html><body><h3>Primeiro Servidor WEB</h3><body><html>");
// });

// server.listen(3000);

// console.log('Servidor na porta 3000: on line...');



// Passo 1 

// Utilizando o express, após utilizar o mpm init e o npm install express --save

// Dá um erro, pois não temos como responder uma requisição GET

// var express = require('express');

// var app = express();

// app.listen(3000, function(){

//     console.log('Servidor na porta 3000 com Express: on line...');

// });



// Passo 2 - Configurando para atender a requisições GET

var express = require('express');

var app = express();

app.get('/produtos', function(request, response){

    response.send("<html><body><h3>Primeiro Servidor WEB utilizando rotas com Express</h3><body><html>");

})

app.listen(3000, function () {

    console.log('Servidor na porta 3000 com Express: on line...');

});

