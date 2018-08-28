// Configuração do Express em arquivo que vai ser exportado, para isso utilizar o modeule.exports


// Primeiro modelo que chama a variável express e depois a app
// Para poder exportar um módulo que eu tenha criado, devo utlizar o module.exports.

// module.exports = function() {
    
//     var express  = require('express');

//     var app = express();

//     app.set('view engine', 'ejs');

//     return app;
// }


// Segundo modelo, onde não utlizamos a variável express, chamamos ela diretamente via app. Comparar com o código acima.

// module.exports = function () {

//     var app = require('express')(); // Aqui chamamos diretamente o método.

//     app.set('view engine', 'ejs');

//     return app;
// }


// Terceiro modelo, onde retiramos os itens que não precisam ser carregados diversar vezes, apenas uma vez.

var app = require('express')(); // Aqui chamamos diretamente o método.

app.set('view engine', 'ejs');

console.log('Módulo do Express carregado com sucesso.');


module.exports = function () {

    return app;
}



