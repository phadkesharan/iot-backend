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

const rows = [
    { id: 1, DishName: 'Savor Party Bread', Price: 299 },
    { id: 2, DishName: 'Fruit Charcuterie Board', Price: 359 },
    { id: 3, DishName: 'Hot Spinach Artichoke Dip', Price: 499 },
    { id: 4, DishName: 'Fried Prosciutto Tortellini', Price: 199 },
    { id: 5, DishName: 'Newyork Cheese Cake', Price: 299 },
    { id: 6, DishName: 'Lemon Meringue Pie', Price: 199 },
    { id: 7, DishName: 'Warm bread pudding', Price: 449 },
    { id: 8, DishName: 'Red Velvet Cake', Price: 999 },
];



app.post('/order', (req, res) => {
    console.log(req.body)

    const { location, n_people, seat, dishes } = req.body;

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

    results.dishes.forEach(i=>{
        console.log(rows[i-1][DishName])
    })
    res.sendStatus(200);

})


app.listen(PORT, (err) => {
    if (err)
        console.log(err)
    console.log(`App running at port ${PORT}`)
})

