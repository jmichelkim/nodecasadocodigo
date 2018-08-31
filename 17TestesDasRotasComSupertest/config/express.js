// Grande mudança do servidor 08ConexaoIsolada para o 09ConexaoIsoladaExpressLoad

// Passo 0 - Antes de utilizar o body-parser

// var express = require('express');
// var load = require('express-load');

// console.log('Módulo do Express carregado com sucesso.');

// module.exports = function () {
    
//     var app = express();

//     app.set('view engine', 'ejs');
//     app.set('views', './app/views');

//     load('routes', {cwd: 'app'}) // Aqui o cwd indica ao express onde localizar a pasta infra e rotas
//         .then('infra')
//         .into(app);
        
    
//     return app;
// }

// Passo 1 - Utilizando o bodyparser - utilizado para que o parse do body funcione.
// A ordem de carregamento é muito importante pois, o body-parser deve ser informado antes do 
// carregamento das rotas, para quando elas forem carregadas, já tenham a informação de como deverá
// ser feito o parse dos seus formularios

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser'); // Objeto carregado
var ExpressValidator = require('express-validator');

console.log('Módulo do Express carregado com sucesso.');

module.exports = function () {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true})); // utilizando o bodyparser
    app.use(bodyParser.json()); // Adicionado para que o servidor aceite uma requisição com um json como argumento.
    app.use(ExpressValidator()); // Biblioteca para validação de dados que chegam via formulário, json, para serem inseridos no banco.

    load('routes', { cwd: 'app' }) // Aqui o cwd indica ao express onde localizar a pasta infra e rotas
        .then('infra')
        .into(app);


    return app;
}

