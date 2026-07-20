function add(a,b){
    return a + b ;
}

function sub(a,b){
    return a - b ;
}

function multiply(a,b){
    return a * b ;
}

function division(a,b){
    if(b === 0){
        return "Division by zero is not possible";
    }
    return a / b;
}

module.exports={
    add,
    sub,
    multiply,
    division
};


