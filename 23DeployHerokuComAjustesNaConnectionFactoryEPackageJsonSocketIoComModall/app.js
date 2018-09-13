// Passo 0 - Antes de isolar as rotas para o arquivo ./app/routes/produtos.js

// var app = require('./config/express')(); //Condensamos o código aqui.

// app.get('/produtos', function (request, response) {
//     console.log('Requisição efetuada com sucesso para a página /produtos.');

//     response.render("produtos/lista");;
// });

// app.listen(3000, function () {
//     console.log('Servidor Node: Express - Ejs - Nodemon - ModuleExports - porta 3000: on line...');
// });


// Passo 1 - Isolando as rotas e chamando o módulo via require - envia o app.get para o arquivo produtos.js
// Observe que enviamos o app como parâmetro da função no rotasProdutos.

// var app = require('./config/express')(); //Condensamos o código aqui.
// var rotasProdutos = require('./app/routes/produtos')(app);

// app.listen(3000, function () {
//     console.log('Servidor Node: Express - Ejs - Nodemon - ModuleExports - porta 3000: on line...');
// });


// Passo 2 - Aqui utilizamos o express-load, desta forma vamoss excluir a var rotasProdutos

// var app = require('./config/express')(); //Condensamos o código aqui.

// app.listen(3000, function () {
//     console.log('Servidor Node: Express - Ejs - Nodemon - ModuleExports - porta 3000: on line...');
// });



// Alterando para poder utilizar o WebSocket(função javascript) e o socket.io(bibliioteca node)
// Código com muitas alteraçãoes, como por exemplo host, server, porta como variáveis na construção e no console.log.

var app = require('./config/express')(); //Condensamos o código aqui.
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;
var server = http.listen(porta, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Server Listening at http://%s:%s', host, port);
    // console.log('Server Listening at http://%s:%s', host, port);
    
});