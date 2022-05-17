
<!-- ## <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"> Olá seja bem-vindo(a)!</h2> -->
## <h2> Olá seja bem-vindo(a)!</h2>



Sou <strong>Desevolvedor</strong> e <strong>Engenheiro Civil</strong><br />

Criei essa <strong>API Rest</strong> 


  Utilizei: <strong>MySql, NodeJS e JavaScript.</strong>
  
  <strong>A aplicação back-end esta no Postman.</strong>


  frameworks: <strong>cors, express, mysql2</strong>

## Tecnologias & Ferramentas



<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" height="25"/><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25"/><img src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm" height="25"/><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" height="25"/><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" height="25"/>


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
### Autor
---
<a href="https://www.linkedin.com/in/henriquecarvalhovieira/">
    
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87788394?s=400&u=7f36505574f0bc15df5b88cc887a51f8e6406310&v=4" width="100px;" alt=""/>
  <br />
  <sub><b>Henrique Vieira</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
 
 
 Feito com ❤️ por Henrique Vieira 
 
 👋🏽 Entre em contato!
 
 [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquecarvalhovieira/)](https://www.linkedin.com/in/henriquecarvalhovieira/) 
 [![Live mail Badge](https://img.shields.io/badge/-hnr01@live.com-5186e1?style=flat-square&logo=Outlook&logoColor=white&link=mailto:hnr01@live.com)](mailto:hnr01@live.com)
