const express = require('express')
const app = express()
const port = 3000

const car = require('./car');

// app.get('/', (req, res) => res.send(`${car.brand} ${car.model}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const fetchCar = async () => {
  const carFetched = await require('./car.js');
  console.log('Car found!');
  return carFetched;
};

const fetchNow = async () => {
  const myCar = await fetchCar();
  console.log(myCar.brand);
  console.log(myCar.model);
}

console.log('Before');
fetchNow();
console.log('After');