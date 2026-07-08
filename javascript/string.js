// string concatenation 
// let str1 ="Shakti";
// let str2 ="Singh";

// console.log("my name is " + str1 + " " + str2)

// template literals 

// let str3 ="full Stack "
// let str4 ="Software developer";

// console.log(`I am ${str3} ${str4}`);

// destructuring 

// let arr =[1,2,3,4];



// let obj ={
//     name:"Shakti",
//     age:21,
//     ROll:"full stack software developer"
// }

// push,pop,shift,unshift,length

// arr.pop();
// console.log(arr);

// arr.push();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift();

// arr.length =  4;
// console.log(arr);

// console.log(arr.length);

// console.log(typeof(arr));
// console.log(Array.isArray(arr));

// checking and comparing array and object

// let arr = [1, 2, 3];
// let obj = {
//     name: "Shakti",
//     age: 21
// };

// console.log(typeof arr);          // object
// console.log(typeof obj);          // object

// console.log(Array.isArray(arr));  // true
// console.log(Array.isArray(obj));  // false

// slice - copy/subset

// let arr = [1,2,3,4,5]
// // let newsubset1 = arr.splice(1,2);
// let newsubset2 = arr.slice(0,3);

// // console.log(newsubset1);
// console.log(newsubset2);
// map-size of array remains same 
// let arr = [2,3,4]
// let neWArray = arr.map(nums=>nums*nums);

// console.log(neWArray);

// filter-filter array based on certain condition resizing of array

// let arr2 = [9,15,30,40];
// let newArray2 = arr2.filter(nums => nums>20);
// console.log(newArray2);

// using if else and arrow function
// let arr2 = [9,15,30,40];
// let newArray2 = arr2.filter((nums) =>{
//     if (nums > 20){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(newArray2);



// reduce

// let arr = [10,20,30,40];
// let sum = arr.reduce((acc,current)  => {
//     return acc + current;
// },0)

// console.log(sum)

// let arr3 = [3,4,5,7];
// let res = arr3.reduce((total,num) => total + num,0);
// console.log(res);

// let array = [1,2,3,4];
// const [x,y,z,w] = array;
// console.log(x,y,z,w);


// object destructuring
// let  obj={
//     name:"Shakti",
//     age: 21,
//     Role:"Full stack software developer",
// }
// const {name,age,Role} = obj;
// console.log(name);
// console.log(age);

// obj = {
//     Persondetails:{
//         name:"Shakti Singh",
//     age:21,
//     gender:"Male",
//     },
    
    
//     address:{
//         city: "Lucknow",
//         state:"u.p",
//         pincode:226028
//     }
// }
// const {name,age,gender} =obj.Persondetails;
// const {city,state,pincode} = obj.address;

// console.log(Object.entries(obj.address));
// console.log(Object.entries(obj.Persondetails));


let obj1 = {
       name:"Shakti Singh",
       age:21,
    
}

let obj2 = {
       ...obj1,
       country:"India",
       State:"Uttar Pradesh"
    
}
console.log(obj2.age);
console.log(obj2.name);