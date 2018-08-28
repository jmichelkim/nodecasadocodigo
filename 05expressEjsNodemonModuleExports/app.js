// Passo 0 - Antes de isolar a configuração do express utilizando o module.exports

// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs'); // string passada para o express informado uma view engine e seu nome (ejs)

// app.get('/produtos', function (request, response) {

//     console.log('Requisição efetuada para a lista de produtos...');

//     response.render("produtos/lista"); // Adicionado o render e a rota.
// })

// app.listen(3000, function () {

//     console.log('Servidor na porta 3000 com Express: on line...');

// });


// Passo 1 - Isolando a configuração do express - passando o código para ./config/express

// var configura = require('./config/express');

// var app = configura();

// app.get('/produtos', function(request, response){
//     console.log('Requisição efetuada com sucesso para a página /produtos...');
    
//     response.render("produtos/lista");;
// });

// app.listen(3000, function() {
//     console.log('Servidor Node: Express - Ejs - Nodemon - ModuleExports - porta 3000: on line...');
// });


// Passo 2 - Condensando mais ainda o código na variável app

var app = require('./config/express')(); //Condensamos o código aqui.

app.get('/produtos', function (request, response) {
    console.log('Requisição efetuada com sucesso para a página /produtos.');

    response.render("produtos/lista");;
});

app.listen(3000, function () {
    console.log('Servidor Node: Express - Ejs - Nodemon - ModuleExports - porta 3000: on line...');
});