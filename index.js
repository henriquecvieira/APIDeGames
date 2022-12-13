const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database");
const games = require("./Games")
const users = require("./User")
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const auth = require("./auth.js")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("Sucessfull connection")
    }).catch((error) => {
        console.log("error")
    })

// listar de todos os games
app.get("/games", async (req, res) => {
    try {
        const results = await games.findAll({ order: [['id', 'DESC']], limit: 2 })
        if (results) {
            res.status(200).json(results)
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//listar apenas um game
app.get("/game/:id", async (req, res) => {
    console.log(req.params)
    const id = req.params?.id;

    try {
        const game = await games.findOne({ where: { id: id } })
        if (!game == undefined) {
            return res.status(404).json({ error: "Game is not found" })
        }
        return res.status(200).json({ game: game })
    } catch (error) {
        return res.status(500).json({ error: "Ocorreu algum erro." })
    }
});


//cadastrar um game
app.post("/games", async (req, res) => {
    try {
        let { title, price, year } = req.body
        if (req.body?.title == false && req.body?.price == false && req.body?.year == false) {
            res.status(404).json({ error: "title, price or year is not defined!" })
        }
        const id = Math.ceil((Math.random() * 10000) + 1000)
        await games.create({ id, title, price, year })
        let result = await games.findOne({ where: { id: id } })
        res.status(200).json({ succes: result })
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

//deletar um game pelo id
app.delete("/game/:id", async (req, res) => {
    try {
        if (isNaN(req.params?.id)) {
            res.sendStatus(400)
        } else {
            const id = req.params?.id
            const resultFind = await games.findOne({ where: { id: id } })
            if (resultFind) {
                await games.destroy({ where: { id: id } })
                res.status(200).json({ deleted: resultFind })
            }
            res.status(404).json({ error: "game not exists!" })
        }
    } catch (error) {
        res.status(400).json({ error: error })
    }
})


//altera um game pelo id
app.put("/game/:id", async (req, res) => {
    try {
        if (isNaN(req.params?.id)) {
            res.sendStatus(400)
        } else {
            let id = req.params?.id
            let game = await games.findOne({ where: { id: id } })

            if (game != undefined) {
                let updateGame = {}
                let { title, price, year } = req.body

                if (title != undefined) {
                    updateGame.title = title
                }
                if (price != undefined) {
                    updateGame.price = price
                }
                if (year != undefined) {
                    updateGame.year = year
                }
                await game.update(updateGame, { where: { id: id } })
                let results = await games.findOne({ where: { id: id } })
                res.status(200).json(results)

            } else {
                res.sendStatus(404)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// endpoint cria um usuário
app.post("/user", auth, async (req, res) => {
    try {
        const userGamer = { name, email, password } = req.body;
        users.id = uuidv4()
        const validName = await users.findOne({ name: users.name })
        const validEmail = await users.findOne({ email: users.email })
        if (validName || validEmail) {
            return res.status(201).json({ error: "user already exists!!" })
        }
        if (req.body?.name == false && req.body?.email == false && req.body?.password == false) {
            res.status(404).json({ error: "name or email or password is not defined!" })
        } else {
            let resultCreate = await users.create({ userGamer })
            // await games.create({id, title, price, year})      
            const resultToken = await token.generationToken(resultCreate)
            return res.status(201).json({ resultCreate, resultToken })
        }
    } catch (error) {
        res.status(401);
        res.json({ err: "Credenciais inválidas!" })
    }

});

//endpoint de login
app.post("/auth", auth, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email }).select({ password });

        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ error: "Invalid user" })
        }

        user.password = undefined;

        const tokenGeneration = await token.generationToken({ user });
        return res.status(201).json({ user, token: tokenGeneration });
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: 'Registration failed' });
    }
})

app.listen(45678, () => {
    console.log(`API running at ${process.env.PORT}`)
})
