const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
    .authenticate()
    

let dataBase = {
    games: [
        {
            id: 23,
            title: "Call of Duty MW",
            year:2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year:2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year:2012,
            price: 80
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(dataBase.games)
})

app.get("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)    
    }else{
       let id = parseInt(req.params.id)
       let game = dataBase.games.find(g => g.id == id)
       if(game != undefined){
           res.statusCode = 200
           res.json(game)
        }else{
            res.sendStatus(404)
        }     
    }
})

app.listen(45678, () => {
    console.log("API running!")
})