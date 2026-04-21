CREATE Table Aluno (
    id int primary key auto_increment,
    nome varchar(100) not null,
    data_nascimento date not null,
    genero varchar(10) not null,
    conato varchar(20) not null,
    endereco varchar(255) not null,
    numero_bilhete varchar(20) not null,
    created_at timestamp default current_timestamp,
);

CREATE TABLE anos_lectivos (
    id int primary key auto_increment,
    ano varchar(20) not null,
    descricao varchar(50) not null,
    created_at timestamp default current_timestamp
);

CREATE Table classes (
    id int primary key auto_increment,
    nome varchar(50) not null,
    ano_lectivo_id int not null,
    Foreign Key (ano_letivo_id) REFERENCES anos_letivos(id)
);

CREATE TABLE matriculas (
    id int primary key auto_increment,
    aluno_id int not null,
    classe_id int not null,
    ano_lectivo_id int not null,
    data_matricula date not null,
    Foreign Key (aluno_id) REFERENCES alunos(id),
    Foreign Key (classe_id) REFERENCES classes(id),
    Foreign Key (ano_lectivo_id) REFERENCES anos_lectivos(id)
);

CREATE Table utilizadores (
    id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(255) not null,
    role varchar(20) not null,
    ALTER TABLE utilizadores,
    ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at timestamp default current_timestamp
);