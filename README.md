<h1> em construção</h1>

<!-- ## <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"> Olá seja bem-vindo(a)!</h2> -->
## <h2> Olá seja bem-vindo(a)!</h2>



Sou <strong>Desevolvedor</strong> e <strong>Engenheiro Civil</strong><br />

Criei essa <strong>API Rest</strong> 


<<<<<<< HEAD
  Utilizei: <strong>MySql, NodeJS e JavaScript e Axios.</strong>
  
  <strong>A aplicação back-end foi testada noPostman.</strong>


  frameworks: <strong>cors, express, mysql2, sequelize, body-parser, js-beautify, nodemon</strong>
=======
  Utilizei: <strong>MySql, NodeJS e JavaScript.</strong>
  
  <strong>A aplicação back-end esta no Postman.</strong>


  frameworks: <strong>cors, express, mysql2</strong>
>>>>>>> 3b76275eb9b0f4a4c58106dfb7881d2f023b88e8

## Tecnologias & Ferramentas



<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" height="25"/><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25"/><img src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm" height="25"/><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" height="25"/><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" height="25"/>


<<<<<<< HEAD
Foi utuilizado o banco de dados <strong>MySql</strong>, cuja  modelagem foi feita através do <strong>sequelize</strong> sendo passados por padrão o nome da schema, o root e a senha, como 1º, 2º  e 3º parâmetros, respectivamente conforme abaixo: 
```
const Sequelize = require("sequelize")

const connection = new Sequelize('apidegames', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection
```

Os dados armazenados em banco de dados são: id (que é gerado automaticamente), title, year e price:

```
const games = connection.define('games', {
    
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false }
});
```



 Feito com ❤️ por Henrique Vieira 
 
 👋🏽 Entre em contato!
 
 [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquecarvalhovieira/)](https://www.linkedin.com/in/henriquecarvalhovieira/) 
 [![Live mail Badge](https://img.shields.io/badge/-hnr01@live.com-5186e1?style=flat-square&logo=Outlook&logoColor=white&link=mailto:hnr01@live.com)](mailto:hnr01@live.com)
=======
Para acessar a AIP, deve ser chamada a rota: ```https://exameflavio.herokuapp.com/oapi/authenticate```, usando o verbo ```POST```, passando como parâmetro: 
```
{ 
"user": "110677", 
"password": "110677" 
}
```
Será retornado um Token. 

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJpZCI6MSwidXNlciI6IjExMDY3NyIsImlhdCI6MTYyMTI3MjI5NSwiZXhwIjoxNjIxMjc1ODk1fQ.
    55zzl5rlU-mf4uDEYkwr5eVt9kZnC4yKDGsofmbqs75"
} 
```

Atráves da rota ```POST``` https://exameflavio.herokuapp.com/api/resultInsert, juntamente com o token gerado, passamos o ```Authorization Bearer: token``` 
e os parâmetros de entrada para inserir e validar o valores.

Parâmetros de entrada:

```json
{
"codigo_amostra": "99999999",
"cocaina": 0.678,
"anfetamina": 0.1,
"metanfetamina": 0.1,
"mda": 0.1,
"mdma": 0,
"thc": 0.1,
"morfina": 0.1,
"codeina": 0.1,
"heroina": 0.1,
"benzoilecgonina": 0,
"cocaetileno": 0,
"norcocaina": 0
}
```

Teremos como retorno um JSON com o a validação dessa amostra, exemplo:
```
{
"maiorQueReferencia": true ou false 
"valor": 0.00 - valor da amostra
"positivo": false ou false
}
```

```
[
    "99999999",
    {
        "cocaina": {
            "maiorQueReferencia": true,
            "valor": 0.678,
            "positivo": false
        },
        "anfetamina": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "metanfetamina": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "mda": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "mdma": {
            "maiorQueReferencia": false,
            "valor": 0,
            "positivo": false
        },
        "thc": {
            "maiorQueReferencia": true,
            "valor": 0.1,
            "positivo": true
        },
        "morfina": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "codeina": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "heroina": {
            "maiorQueReferencia": false,
            "valor": 0.1,
            "positivo": false
        },
        "benzoilecgonina": {
            "maiorQueReferencia": false,
            "valor": 0,
            "positivo": false
        },
        "cocaetileno": {
            "maiorQueReferencia": false,
            "valor": 0,
            "positivo": false
        },
        "norcocaina": {
            "maiorQueReferencia": false,
            "valor": 0,
            "positivo": false
        }
    }
]
```

Atráves da rota ```POST``` https://exameflavio.herokuapp.com/api/listResult, juntamente com o token gerado, passamos o ```Authorization Bearer: token```
com o parâmetro: 
```
{
  codigo_amostra: "00000000"
} 
```
A API retorna o resultado desse codigo_amostra.
Se não passarmos parâmetros, a API retorna uma lista TOP 100 das amostras cadastradas com seus resultados.

>>>>>>> 3b76275eb9b0f4a4c58106dfb7881d2f023b88e8
