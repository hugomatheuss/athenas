<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

Clonando o repositório

    git clone git@github.com:hugomatheuss/athenas.git

Entrando no diretório do projeto

    cd athenas

Para instalar as dependências da API e do Front rode o comando abaixo
    
    sudo chmod +x ./install.sh
    sudo chmod +x ./start.sh

    ./install.sh
    ./start.sh


Acessando em 

----------
## Testes

php artisan test --filter PessoaTest

## Routes
- POST `/api/login` - Realiza o login do usuário
- POST `/api/register` - Cadastra um usuário
- GET `/api/logout` - Realiza o logout

- GET `/api/pessoas` - Todos as pessoas
- GET `/api/pessoas/{pessoa}` - Uma pessoa específica
- POST `/api/pessoas` - Cadastra uma pessoa
- PUT `/api/pessoas/{pessoa}` - Altera uma pessoa específica
- DELETE `/api/pessoas/{pessoa}` - Remove uma pessoa específica
