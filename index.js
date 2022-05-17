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

//listar de todos os games
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

//listar apenas um game
app.get("/game/:id", async (req, res) => {
   
    const  id   = req.params?.id;
    try{
        const game =  await games.findOne({ 
            where: 
                {
                    id: id
                }  
            });

        if(!game)
            return res.status(400).json({ error: "Game not found"});

        return res.status(200).json({game: game})

    }catch(err){
        return res.status(400).json({error: "Ocorreu algum erro."})
    }
});


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
 
//deletar um game pelo id
app.delete("/game/:id", async (req, res) => {
     
    if(isNaN(req.params?.id)){
        res.sendStatus(400)
    }else{
        const id = req.params?.id
        const result = await games.destroy({
            where: 
            {
                id: id
            }            
        })
        res.status(200).json({succes: result})    
    }
})


//altera um game pelo id
app.put("/game/:id", async (req, res) =>{
    if(isNaN(req.params?.id)){
        res.sendStatus(400)    
    }else{        
        let id = req.params?.id
        let game = await games.findOne({
            where: 
                { 
                   id: id
                }
        })
        if(game != undefined){
            let updateGame = {}
            let {title, price, year} = req.body
            
            if (title != undefined){

                updateGame.title = title
            }
            if (price != undefined){
                updateGame.price = price
            }
            if (year != undefined){
                updateGame.year = year
            }
            console.log(updateGame)
            let results = await games.update(
                updateGame
            ,{
                where:{
                id: id        
            }})

            res.status(200).json({succes: results})
            
        }else{
            res.sendStatus(404)
        }     
    }
})
   


app.listen(45678, () => {
    console.log("API running at → http://localhost:45678/games")
})
