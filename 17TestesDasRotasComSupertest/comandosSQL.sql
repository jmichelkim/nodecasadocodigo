

-- criar o bando de dados
create database casadocodigo_nodejs_teste;


-- Criar a tabela

CREATE TABLE produtos (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL
);