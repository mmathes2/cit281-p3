//fs variable 
const fs = require('fs'); 

//fastify variable package 
const fastify = require("fastify")();

//import coinCount 
const {coinCount} = require("./p3-module.js") 

//Part 8 GET route that reads and returns index.html
fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if(err){
            reply
            .code(500)
            .header("Content-Type", "text/html; charset=utf-8")
            .send('<h1>Error</h1>')
        } else {
            reply
            .code(200)
            .header("Content-Type", "text/html; charset=utf-8")
            .send(data);
        }
    }, ) 
  }); 


//Part 9 second route
  fastify.get("/coin", (request, reply) => {
    let {denom=0,count=0} = request.query;
    denom = parseInt(denom);
    count = parseInt(count);
    let coinValue = coinCount({denom ,count}); 
    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`); 
  }); 

// //Part 10 /coins with GET verb 
fastify.get("/coins", (request, reply) => {
  let {option} = request.query;
  option = parseInt(option)
let coinValue 
const coins = [{ denom: 10, count: 5 }, { denom: 1, count: 4 }]

  switch(option){ 
  case 1: 
  coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });   // option = 1
  break;
  case 2: 
  coinValue = coinCount(...coins);    // option = 2
  break;
  case 3: 
  coinValue = coinCount(coins);    //option = 3
  break;
  default:
    0
  break;
  }
  reply
  .code(200)
  .header("Content-Type", "text/html; charset=utf-8")
  .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
 }); 

//Part 8 listen() and IP address delivery to console
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});



// fastify.get("/", (request, reply) => {
// functions, anything its doing
//     reply
//     .code(200)
//     .header("Content-Type", "text/html; charset=utf-8")
//     .send()
// }); 