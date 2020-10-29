let pet = {
    eats : true
};

//create a new object with pet as prototype 
let dog = Object.create(pet);

console.log(dog.eats);

console.log(Object.getPrototypeOf(dog) ===  pet);

Object.setPrototypeOf(dog, {}); // change the prototype of dog to {null}