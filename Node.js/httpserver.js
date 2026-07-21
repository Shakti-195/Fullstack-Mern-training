// creating  http server using http modules
// syntax

const http = require('http');

// const server = http.createServer((req,res)=>{
  
//     res.end("Hi am Shakti Singh Student at BBD University"
    
//     );

// });

// server.listen(4000, ()=>{
//   console.log(" Server is running at http://localhost:4000");
// });

// passing in html in createServer
// const http = require("http");

// const server = http.createServer((req,res)=>{
//   res.setHeader("Content-Type","text/html");
//   res.end(`<h2>BBD University</h2>
//     <p>Lucknow,UttarPradesh</p>`)
// });

// server.listen(3000, ()=>{
//   console.log(" Server is running at http://localhost:3000");
// });



// passing json data
// const http = require("http");

const server2 = http.createServer((req,res)=>{
  res.setHeader("Content-Type","application/json");

  const obj={
    _id : 1,
    name:"Shakti Singh",
    age:23,
    role:"Student"
    
  }

  res.end(JSON.stringify(obj));
}).listen(4000);