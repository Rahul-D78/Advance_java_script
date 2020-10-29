//A clouser is a function that remember its outer variable and csn access them . 
//In some languages, It is not possible or a function should be written in a special way to mkke it happen.

let add = (() => {
    var counter = 0;
    return () => {counter += 1 ; return counter}
})();
add();
add();

//the counter value will be 3