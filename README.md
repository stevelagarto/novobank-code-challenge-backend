# Novobank Code Challenge

Simple CRUD Front End and Back End Project

## Backend Tech
- express (server)
- mysql (database)
- sequelize (ORM)
- jest (Testing Suite)

## Cheatsheet

Create a .env file with this structure:

DB_NAME = ""
ADMIN_DB= ""
PASS_DB = ""
HOST = "localhost"

Description | Command
------------| -------
Install dependencies | yarn
Run server | yarn run start
Run linter | yarn run lint
Fix linter errors | yarn run lint-fix
Run tests | yarn run test
Run tests with watch | yarn run test:

# Database Structure

## Table Contacts

field | datatype | Allow Null
------| -------- | ----------
first_name | STRING | NO
last_name | STRING | NO
email | STRING | NO
phone | INTEGER | NO

id, createdAt and UpdatedAt are automatically created


