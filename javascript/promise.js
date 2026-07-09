// let mypromise = new Promise((resolve,reject) => {
//     let success = false;

//     if (success) {
//         resolve("Promise Resolved");
//     } else {
//         reject("Promise Rejected");
//     }
// });

// mypromise
//     .then((result)=> {
//         console.log(result);
//     })
//     .catch((error)=>{

//     });

    // then -> promise resolved
    // catch -> promise rejected

    // const promise = new Promise ((resolve,reject) => {
    //     setTimeout(() =>{
    //         resolve("Promise resolved.....")
    //     },3000);
    // });

    // promise.then(data => console.log(data))
    // .catch(err => console.log(err))

    // usimg promise check whether a number is even or odd also display result

//     function check(num){
//         return new Promise ((resolve,reject) =>{
        
//             if (num%2===0){
//                 resolve("even");
//         }else{
//                 reject("odd");
//             }
//             })

//     }


// check(5).then((data)=>console.log(data)).catch(err=>console.log(err));
// check(8).then((data)=>console.log(data)).catch(err=>console.log(err));

// using promise check the transaction through bank is successfull (withdraw,balance)
// function transaction(withdrawAmount,balance){
//     return new Promise((resolve, reject) => {
//         if (balance>=withdrawAmount){
//             let remainingBalance = balance - withdrawAmount;
//             resolve(`✅transaction successfull\nreamining balance:₹${remainingBalance}`)
//         }else{
//             reject("❎Transaction Failed: Insufficient Balance")
//         }

//     });
// }
// // successfull transactions
// transaction(500,1000)
// .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // failed transactions
// transaction(2000,1000)
// .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



//fetch api
// fetch ("https://jsonplaceholder.typicode.com/todos/1").then (result=>result.json())
// .then(data=>console.log(data))
// .catch((err=>console.error("error",err)))

// fetch ("https://jsonplaceholder.typicode.com/photos").then (result=>result.json())
// .then(data=>console.log(data))
// .catch((err=>console.error("error",err)))

// Async Await in js 
// Introduced in the year 2017(ES8);
// Async function

// async function check(){
//     // returns a promise
//     // asyncronous code
// }


async function hello(){
    return "Hello I am a full-stack developer...."
};

hello().then(res=>console.log(res)).catch(err=>console.error(err));
//Await  Pauses the execution of async function until promise resloved....
// // // Syntax

// // const result = await promise;

// // Example 

//function returning a promise

function getUserDetails(marks){

    return newPromise((resolve,reject)=>{
        if(marks>40){
            resolve("Provide Details");
        }
        else{
            reject("Access Denied");
        }
    })
// asynchronous function showing user details

}
async function displayDetails(){
    try{
        // Await pauses execution until promise resolved;
        let result = await getUserDetails();
        console.log(result);
    }
    catch(error){
        console.log(err);
    }
}










// try catch(error handling)