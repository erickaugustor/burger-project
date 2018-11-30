CREATE DATABASE burguer;

use burguer;

CREATE TABLE ingredientes (
  codigo_ingrediente INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,  
  valor INT NOT NULL, 
  PRIMARY KEY (codigo_ingrediente)
);

CREATE TABLE lanches_titulo (
  codigo_lanche INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,  
  PRIMARY KEY (codigo_lanche)
);

CREATE TABLE lanches_completos (
  codigo INT AUTO_INCREMENT,
  fk_codigo_lanche INT NOT NULL,
  fk_codigo_ingrediente INT NOT NULL,
  PRIMARY KEY(codigo),
  FOREIGN KEY (fk_codigo_ingrediente) REFERENCES ingredientes(codigo_ingrediente) ON DELETE CASCADE,
  FOREIGN KEY (fk_codigo_lanche) REFERENCES lanches_titulo(codigo_lanche) ON DELETE CASCADE
);
