create database if not exists db_petvets;

use db_petvets;

create table if not exists tb_especies (

id_especie bigint auto_increment primary key,
especie varchar(40)
);

create table if not exists tb_tutor (
id_tutor bigint auto_increment primary key,
nome_tutor varchar(120),
email_tutor varchar(120),
senha_tutor varchar(15),
cpf_tutor varchar(11),
telefone_tutor varchar(11)
);

create table if not exists tb_veterinario (
id_veterinario bigint auto_increment primary key,
nome_veterinario varchar (120),
crmv varchar (5),
telefone_veterinario varchar (11),
email_veterinario varchar(120),
senha_veterinario varchar(15)
);

create table if not exists tb_pet (

id_pet bigint auto_increment primary key,
nome_pet varchar(120),
idade_pet int,
sexo_pet ENUM ('Masculino', 'Feminino'),
id_especie bigint,
CONSTRAINT fk_especie
FOREIGN KEY (id_especie)
REFERENCES tb_especies(id_especie),
id_tutor bigint,
CONSTRAINT fk_tutor
FOREIGN KEY (id_tutor)
REFERENCES tb_tutor(id_tutor),
id_veterinario bigint,
CONSTRAINT fk_veterinario
FOREIGN KEY (id_veterinario)
REFERENCES tb_veterinario(id_veterinario)
);

SHOW TABLES;

SELECT * FROM tb_tutor;

SELECT *FROM tb_veterinario;

SELECT * FROM tb_pet;


insert into tb_tutor(id_tutor, nome_tutor, email_tutor, senha_tutor, cpf_tutor, telefone_tutor) values
(1, "Isabella Minhão", "bellaisaminhao@gmail,com", "bella123","49197494810", "14998233471"),
(2, "Maria Heloisa","maribenini@gmail,com","maelo777", "49224206816", "15991509988"),
(3, "Miguel Narvais", "miguelnarvais@gmail.com","mi123456", "12345678901", "15998780970"),
(4, "Miria Ferraz", "miriaferraz@gmail.com", "mf012345", "49192234451", "15997678899");

insert into tb_veterinario(id_veterinario, nome_veterinario, crmv, telefone_veterinario, email_veterinario, senha_veterinario) values
(1, 'Mariana Alves', '12345', '15987654321', 'mariana.alves@gmail.com', 'mari1234'),
(2, 'Lucas Ferreira', '23456', '15998765432', 'lucas.ferreira@gmail.com', 'lu456789'),
(3, 'Camila Souza', '34567', '15976543210', 'camila.souza@gmail.com', 'Amor222'),
(4, 'Rafael Oliveira', '45678', '15965432109', 'rafael.oliveira@gmail.com', 'DogVet99'),
(5, 'Fernanda Lima', '56789', '15954321098', 'fernanda.lima@gmail.com', 'Gato202');

insert into tb_especies(id_especie, especie) values
(1, "Cachorro"),
(2, "Ave"),
(3, "Gato"),
(4, "Peixe");

insert into tb_pet(id_pet, nome_pet, idade_pet, sexo_pet, id_especie, id_tutor, id_veterinario) values
(1, 'Thor', 5, 'Masculino', 1, 1, 1),
(2, 'Mel', 3, 'Feminino', 1, 2, 2),
(3, 'Luna', 2, 'Feminino', 2, 3, 3),
(4, 'Bob', 7, 'Masculino', 2, 4, 4),
(5, 'Nina', 1, 'Feminino', 3, 1, 5),
(6, 'Max', 4, 'Masculino', 3, 2, 1),
(7, 'Mimi', 6, 'Feminino', 4 , 3, 2),
(8, 'Fred', 2, 'Masculino', 4, 4, 3);