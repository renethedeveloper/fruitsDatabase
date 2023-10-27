

/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();


const Fruit = require('./models/Fruit.cjs')
const Veggies= require("./models/Veggies.cjs")





// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./config/db.cjs');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))






app.use(express.json()); // adds .body to the request




app.get("/fruits", async (req, res) => {
    console.log("route hit!")
    let fruitsFromDB = await Fruit.find();
    console.log(fruitsFromDB)
    res.send(fruitsFromDB);
})


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req,res) => {
    console.log(req.body);
    let fruit = req.body;
   let responseFromDB = await Fruit.create(fruit);
   console.log(responseFromDB);
    res.send("Route is good")

})

app.get("/veggies", async (req, res) => {
    console.log("route hit!")
    let veggiesFromDB = await Veggies.find();
    console.log(veggiesFromDB)
    res.send(veggiesFromDB);
})


app.post("/veggies", async (req, res) => {
    // make Veggie model
       let dbResponse =  await Veggies.create(req.body);
       // the created object
       res.status(201).send(dbResponse)
    })


app.listen(PORT, () => {
    console.log(`Up and running!!!  PORT ${PORT}`)
});