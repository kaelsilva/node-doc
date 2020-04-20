const express = require('express')
const app = express()
const port = 3000

const car = require('./car');

// app.get('/', (req, res) => res.send(`${car.brand} ${car.model}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone()