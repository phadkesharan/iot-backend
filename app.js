const express = require('express')
const loki = require('lokijs')
const { v4: uuidv4 } = require('uuid');

const PORT = 8000

const app = express()

const db = new loki('Customer.db')
const users = new db.addCollection('users')

app.post('/order', (req, res)=>{
    const {location, n_people, dishes} = req.body;

})


app.listen(PORT, (err)=>{
    if(err)
        console.log(err)
    console.log(`App running at port ${PORT}`)
})

