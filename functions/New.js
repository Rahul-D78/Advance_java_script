//the "new function" syntax is another way to create a funnction. It's rarely used but sometimes there is
//no alternative.

// let func = new ([arg1, arg2, ... argN], functionBody);

let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1, 2));