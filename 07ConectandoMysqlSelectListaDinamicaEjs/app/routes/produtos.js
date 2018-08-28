// Passo 0 - Antes de conectar no banco.


// module.exports = function(app){

// app.get('/produtos', function (request, response) {
//     console.log('Requisição efetuada com sucesso para a página /produtos.');
//     response.render("produtos/lista");;
    
// });
// }


// Passo 1 - Após instalar o driver do Mysql via npm install --save
// Tivemos que usar o require ('mysql'), connection, query, response.send(results) e fechar a conexão.


// module.exports = function (app) {

//     app.get('/produtos', function (request, response) {

//         var mysql = require('mysql');
        
//         var conecction = mysql.createConnection({
//             host: '173.237.137.60',
//             user: 'mundoart',
//             password: 'g58e73qsWX',
//             database: 'mundoart_fluxo_de_caixa'
//         });

//         conecction.query('select * from categoria', function(err, results){
//             response.send(results); // reponse alterado para enviar o Json.
//         });

//         console.log('Requisição ao banco de dados realizada com sucesso');

//         conecction.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }






// Arquivo criado no exercício - conenctando no banco mysql e exibindo os dados como json no navegador.

// utilizando o banco Mysql
// Tive o erro ao consultar o banco
// code: 'ER_NOT_SUPPORTED_AUTH_MODE',
//     errno: 1251,
//         sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
//             sqlState: '08004',
//                 fatal: true }

// A solução encontrada foi 
// 1.Criar usuario: create user 'usuario-2'@'%' identified with mysql_native_password by '';
// 2. Atualizar o mysql: flush privileges;
// https://cursos.alura.com.br/forum/topico-erro-er_not_supported_auth_mode-client-does-not-support-authentication-protocol-requested-by-server-consider-upgrading-mysql-client-61991

// module.exports = function (app) {

//     app.get('/produtos', function (request, response) {

//         var mysql = require('mysql');

//         var conecction = mysql.createConnection({
//             host: 'localhost',
//             user: 'usuario',
//             password: '',
//             database: 'casadocodigo_nodejs'
//         });

//         conecction.query('select * from livros', function (err, results) {
//             response.send(results); // reponse alterado para enviar o Json.
//         });

//         console.log('Requisição ao banco de dados realizada com sucesso');

//         conecction.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }


// Passo 2 - Para Exibir os dados que chegaram da consulta do mysql como json.
// Foi preciso alterar o response de sen para render - response.render(./produtos/lista)
// Também necessário alterar o arquivo lista.ejs para receber os dados e criar um looping.

module.exports = function (app) {

    app.get('/produtos', function (request, response) {

        var mysql = require('mysql');

        var conecction = mysql.createConnection({
            host: 'localhost',
            user: 'usuario',
            password: '',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function (err, results) {
            response.render('produtos/lista', {lista: results}); // reponse alterado para enviar uma lista Json para a página.
        });

        console.log('Requisição ao banco de dados realizada com sucesso');

        connection.end();

        console.log('Requisição a página url/produtos efetuada com sucesso.');

    });
}