//initialize express
const express = require("express")
const app = express()
//initialize body-parser
const bodyParser = require("body-parser")
// database Connection = connection
const connection = require("./database");
const games = require("./Games")

//cors import
const cors = require("cors");
//const { Model } = require("sequelize/types");
//configure cors on app
app.use(cors())

//configure body-parser at app
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




connection
    .authenticate()
    .then(() => {       
        console.log("Sucessfull connection")       
    }).catch((error) => {
        console.log("error")
    })    
    
const dataBase = connection

//endpoints




app.get("/games", async(req, res) => {
    
    try {              
        const results = await 
        games.findAll({                             
            order:[
                [ 'id', 'DESC']
            ],
            limit: 4 
        })         
        res.status(200).json({succes: results}) 
    } catch (error) {
        res.status(400).json({error: error})
    }
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
app.post("/games", async (req, res) => {
    try {
        let {title, price, year} = req.body       

        if(req.body?.title == false && req.body?.price == false && req.body?.year == false){
        res.status(404).json({error: "title or price or year is not defined!"})
        }
        const result = await games.create({   
            id: Math.ceil((Math.random() * 10000) + 1000),  
            title: title,
            price: price,
            year: year
        }) 
        
        res.status(200).json({succes: result})
        
        
    } catch (error) {
        res.status(400).json({error: error})
    }
})
 

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)
        var index = dataBase.games.findIndex(g => g.id == id)
    }
        if(index == - 1){
            res.sendStatus(404)
        }else{
            dataBase.games.splice(index,1)
            res.sendStatus(200)
        }

})

app.put("/game/:id", (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)    
    }else{
        let id = parseInt(req.params.id)
        let game = dataBase.games.find(g => g.id == id)
        if(game != undefined){
            let {title, price, year} = req.body
            
            if (title != undefined){
                game.title = title
            }
            if (price != undefined){
                game.price = price
            }
            if (year != undefined){
                game.year = year
            }

            res.sendStatus(200)
            
        }else{
            res.sendStatus(404)
        }     
    }
})
   


app.listen(45678, () => {
    console.log("API running at → http://localhost:45678/games")
})