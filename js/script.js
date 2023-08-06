let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let arr_even = [];

let arr_odd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    arr_even.push(arr[i]);
  } else {
    arr_odd.push(arr[i]);
  }
}

for (let i = 0; i < arr_even.length; i++) {
  console.log(`-- the even list is => ${arr_even[i]}`);
}
console.log("-".repeat(40));

for (let i = 0; i < arr_odd.length; i++) {
  console.log(`-- the odd list is => ${arr_odd[i]}`);
}

// start challange

// return the words less than or equel 4
let sentence = "I Love Foood Code Too Playing Much";

const new_sentece = sentence.split(" ").filter(function(ele){
    return  ele.length <= 4
}).join(" ")

console.log(new_sentece)

// return the string only on the ingnorenumbers
let ignoreNumbers = "Elz123er4o";



let ignor = ignoreNumbers.split("").filter(function(ele){
    return isNaN(parseInt(ele))
}).join("")

console.log(ignor)


// return the number only and myltiply

let mix = "A13BS2ZX";


let new_mix = mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele)) 
}).map(function(ele){
    return ele * ele
}).join("")

console.log(new_mix)