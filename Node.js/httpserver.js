// creating  http server using http modules
// syntax

const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Hi I am Shakti Singh,Student at BBD university,Lucknow...");
    res.end();

});

server.listen(4000, ()=>{
  console.log(" Server is running at http://localhost:4000");
});