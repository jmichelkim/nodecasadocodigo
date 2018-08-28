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

// Como queremos que todo os códigos do negócios estejam na pasta app, devemos alterar
// o caminho da pasta views e indicar ao epress esse novo caminho, utilizando mais um app.set.

// var app = require('express')(); // Aqui chamamos diretamente o método.

// app.set('view engine', 'ejs');

// console.log('Módulo do Express carregado com sucesso.');


// module.exports = function () {

//     return app;
// }

// Adicionando o app.set com o endereço das views para o express identificar onde elas estão.

// var app = require('express')();

// app.set('view engine', 'ejs');
// app.set('views', './app/views');

// console.log('Módulo do Express carregado com sucesso.');

// module.exports = function () {
//     return app;
// }



// Grande mudança do servidor 08ConexaoIsolada para o 09ConexaoIsoladaExpressLoad
//

var express = require('express');
var load = require('express-load');

console.log('Módulo do Express carregado com sucesso.');

module.exports = function () {
    
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'}) // Aqui o cwd indica ao express onde localizar a pasta infra e rotas
        .then('infra')
        .into(app);
        
    
    return app;
}


