
// select elememts
let count = document.getElementById("count");

let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");

// Initial value
let counter = 0;

// decrement
incrementBtn.addEventListener("click", ()=>{
    counter++;
    count.innerText = counter;
});


// reset
decrementBtn.addEventListener("click", ()=>{
    counter--;
    count.innerText = counter;
});


// increment
resetBtn.addEventListener("click", ()=>{
    counter=0;
    count.innerText = counter;
});

