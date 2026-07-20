// const {add,name ,age,role,obj} = require("./math");

// console.log(add(3,4));
// console.log(`I am ${name} Singh ${age} years old and I am ${role}`);

// console.log(obj.age);
// console.log(obj.name);


// const calculator = require("./calculator");

// console.log("Addition:", calculator.add(20, 10));
// console.log("Subtraction:", calculator.sub(20, 10));
// console.log("Multiplication:", calculator.multiply(20, 10));
// console.log("Division:", calculator.division(20, 10));

// app.js

const bank = require("./Bank");

console.log("Initial Balance: ₹" + bank.checkBalance());

bank.deposit(5000);
console.log("Balance after Deposit: ₹" + bank.checkBalance());

bank.withdraw(7000);
console.log("Balance after Withdrawal: ₹" + bank.checkBalance());