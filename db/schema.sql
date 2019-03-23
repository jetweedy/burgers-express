drop database if exists burgers_db;
create database burgers_db;
GRANT ALL PRIVILEGES ON burgers_db.* TO mydb;
use burgers_db;
create table burgers (id int not null auto_increment primary key, burger_name varchar(100), devoured boolean default false);
