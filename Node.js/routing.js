// Routing using nodejs
// const http =require("http");

// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("Home Page...");
//     }
//     else if(req.url === "/about"){
//         res.write("About Page...");
//     }
    
//     else if(req.url === "/contact"){
//         res.write("Contact Page...");
//     }
    
//     else if(req.url === "/myproject"){
//         res.write("myproject Page...");
        
//     }
//     else{
//         res.write("page not found...");

//     }
//     res.end();
    
// }).listen(2000,()=>{
//     console.log(`Server is Running at http://localhost:2000 ...`);
// });

// Task 1
// using node.js show routing in web application with page name
// -Home
// -Details
// -Reports
// -Login

const http =require("http");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Home Page...");
    }
    else if(req.url === "/details"){
        res.write("Details Page...");
    }
    
    else if(req.url === "/reports"){
        res.write("reports Page...");
    }
    
    else if(req.url === "/reports"){
        res.write("Reports Page...");
        
    }
    else if(req.url === "/login"){
        res.write("Login Page...");
        
    }
    else{
        res.write("page not found...");

    }
    res.end();
    
}).listen(2000,()=>{
    console.log(`Server is Running at http://localhost:2000 ...`);
});




