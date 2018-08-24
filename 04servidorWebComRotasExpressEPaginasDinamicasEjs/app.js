// Passo 0 - Utilizando Rotas com o Express antes de instalar o EJS

// var express = require('express');

// var app = express();

// app.get('/produtos', function (request, response) {

//     response.send("<html><body><h3>Primeiro Servidor WEB utilizando rotas com Express e Páginas Dinâmicas EJS</h3><body><html>");

// })

// app.listen(3000, function () {

//     console.log('Servidor na porta 3000 com Express: on line...');

// });




// Passo 1 - Utilizando o EJS para poder utilizar códigos HTML com Javascript dinamicamente

// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs'); // string passada para o express informado uma view engine e seu nome (ejs)

// app.get('/produtos', function (request, response) {

//     response.render("produtos/lista"); // Adicionado o render e a rota.

// })

// app.listen(3000, function () {

//     console.log('Servidor na porta 3000 com Express: on line...');

// });



// Passo 2 - apenas instalar o nodemon via npm install -g nodemon para que seja instalado globalmente
// o que significa que qualquer projeto em node podemos utilizá-lo.
// O Nodemon irá realizar uma espécie de deploy automático.


var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // string passada para o express informado uma view engine e seu nome (ejs)

app.get('/produtos', function (request, response) {

    console.log('Requisição efetuada para a lista de produtos...');
    
    response.render("produtos/lista"); // Adicionado o render e a rota.
})

app.listen(3000, function () {

    console.log('Servidor na porta 3000 com Express: on line...');

});