const express = require('express')
const app = express()
const port = 3000

const car = require('./car');

app.get('/', (req, res) => res.send(`${car.brand} ${car.model}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
