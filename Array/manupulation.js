var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const double = (num) => {
//   return num * 2;
// };

// const newNum = numbers.map(double);
// console.log(newNum);

// const newNum = []

// const res = numbers.forEach((x) => {
//   newNum.push(x * 2)
// })

// console.log(newNum);

//Filter - Create a new array by keeping the items that return true.

// const newNum =numbers.filter((x) => {
//   return x < 10
// })

// console.log(newNum);

// const newNum = [];

// numbers.forEach((x) => {
//   if (x < 10) newNum.push(x);
// });

// console.log(newNum);

//Reduce - Accumulate a value by doing something to each item in an array.

// let sum = 0;
// numbers.forEach((x) => {
//   sum += x;
// });
// console.log(sum);

// const res = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
// console.log(res);

//Find - find the first item that matches from an array.

// const f = numbers.find((x) => {
//   return (x > 8);
// });

// console.log(f);

//FindIndex - find the index of the first item that matches.

// const f = numbers.findIndex((x) => {
//       return (x > 2);
//     });
    
//     console.log(f);

import emojipedia from "./emojipedia";

let newArray = [];

emojipedia.forEach((x) => {
  // if(x.meaning.length > 10)
  // return x.meaning.substring(0, 10) + "..."
 
 newArray.push(x.meaning.substring(0, 10) + " ...");
});

console.log(newArray);