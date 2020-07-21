# Novobank Code Challenge BACK END

Back End for a simple Phone Book

You can find the Back End repository at [https://github.com/stevelagarto/novobank-code-challenge-frontend](https://github.com/stevelagarto/novobank-code-challenge-frontend)


## Backend Tech
- express (server)
- mysql (database)
- sequelize (ORM)
- jest (Testing Suite)

## Cheatsheet

Description | Command
------------| -------
Install dependencies | yarn
Run server | yarn start
Run linter | yarn lint
Fix linter errors | yarn lint-fix
Run tests | yarn test
Run tests with watch | yarn test:watch

Back End server runs in PORT:3000 by default

# Database Structure

## Table Contacts

field | datatype | Allow Null
------| -------- | ----------
first_name | STRING | NO
last_name | STRING | NO
email | STRING | NO
phone | INTEGER | NO

id, createdAt and UpdatedAt are automatically created


