let pet = {

    eats: true
};

let dog = {
    jumps : true
};

dog.__proto__ = pet

//we can find both properties in dog now
console.log(dog.eats);
console.log(dog.jumps);