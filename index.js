//initialize express
const express = require("express")
const app = express()
//initialize body-parser
const bodyParser = require("body-parser")
//database connection
//const connection = require("./database");

//configure body-parser at app
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


    

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


//endpoints

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

//cadastrar um game
app.post("/game",  (req, res) => {
    let {title, price, year} = req.body

    dataBase.games.push({
        id: 2505,
        title,
        price,
        year
    })

    res.sendStatus(200)
    
})

app.listen(45678, () => {
    console.log("API running!")
})