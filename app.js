const express = require('express')
const loki = require('lokijs')
const { v4: uuidv4 } = require('uuid');

const PORT = 8000
const app = express()
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.post('/order', (req, res)=>{
    console.log(req.body)

    const {location, n_people, seat, dishes} = req.body;

    let db = new loki('customer.db');
    let users = db.addCollection('users');

    users.insert({
        id: uuidv4(),
        location: location,
        n: n_people,
        seat: seat,
        dishes: dishes
    })

    const results = users.find();
    console.log(results)
    res.sendStatus(200);

})


app.listen(PORT, (err)=>{
    if(err)
        console.log(err)
    console.log(`App running at port ${PORT}`)
})

