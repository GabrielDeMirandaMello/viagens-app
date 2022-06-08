
CREATE DATABASE Projeto_Viagens;
USE Projeto_Viagens;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
    nomeusuario VARCHAR (255),
    email VARCHAR (255),
    senha VARCHAR(255),
    mesFerias VARCHAR(100),
    tipoviagem VARCHAR(255),
    localidade VARCHAR(255)
);
CREATE TABLE historia (
    id int primary key IDENTITY(1,1),
	fk_idusuario INT,
    FOREIGN KEY (fk_idusuario) REFERENCES usuario(idusuario),
    nome varchar(255),
    descricao VARCHAR (255),
    urlImagem VARCHAR(5000)
);
