// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(process.env.LOGNAME));

const server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const args = require('minimist')(process.argv.slice(2,3));

// args.forEach((val, index)=>console.log(`${index}: ${val}`));
// console.log(args['name']);

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })

// console.log('%o', Number);

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

const chalk = require('chalk')
console.log(chalk.yellowBright.bgGreen('Brazil'))