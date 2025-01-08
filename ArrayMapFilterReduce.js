// Her We Have Use Map Method, The map method is used to create a new array with the result of a callback function called on each element in the original array

// let array = [1,2,3,4,5,6,7,8,9,10];
// let multiarray = array.map(function(i){
//     return i*4;
// })
// console.log(multiarray);

// Filter Method 

// let array = [1,2,3,4,5,6,7,8,9,10];
// let multiarray = array.filter(function(i){
//     return i % 2 === 0;
// })
// console.log(multiarray);  //basically it give the output of the number which are divisible by 2


//Reduce Method

var redArr = [1,2,3,4,5,6,7,8,9,10,"Rohit"];
var Reduced= redArr.reduce(function(acc,curr){
    return acc+curr;
},0);
console.log(Reduced); //it will give the output of the sum of the array

// Array Map, Filter & Reduce

let arr = [1,2,3,4,5,6,7,8,9,10];
let mapArr = arr.map(function(i){
    return i*4;
})
let filterArr = arr.filter(function(i){
    return i % 2 === 0;
})
let reduceArr = arr.reduce(function(acc,curr){
    return acc+curr;
},0);
console.log("This shows the output of the Map");
console.log(mapArr);
console.log("This shows the output of the Filter");
console.log(filterArr);
console.log("This shows the output of the Reduce");
console.log(reduceArr);

//https://www.codewithharry.com/blogpost/email-validator-using-html-css-js/