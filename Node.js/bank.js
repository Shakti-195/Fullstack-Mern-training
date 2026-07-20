let balance = 25000;


function deposit(amount){
    balance += amount;
    console.log(`Deposited: ₹${amount}`);

}

function withdraw(amount){
    if(amount <= balance){
        balance -= amount;
        console.log(`Withdrawn:₹${amount}`);
    }else{
        console.log("Insufficient Balance");

    }
}

function checkBalance(){
    return balance;
}

module.exports={
    deposit,
    withdraw,
    checkBalance
};