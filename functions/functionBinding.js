//when passing object methods as callbacks , for instance to setTimeout. there's a known problem of
//"loosing this". Function that provides a built-in method bind that allows fixing this.

//syntax :-
//let boundFunc = func.bind(context);

let user = {
    firstName: "john"
};

function func() {
    console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); 