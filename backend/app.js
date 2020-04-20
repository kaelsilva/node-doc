const express = require('express')
const app = express()
const port = 3000

const car = require('./car');

// app.get('/', (req, res) => res.send(`${car.brand} ${car.model}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})