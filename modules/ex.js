var Module = (function () {
    var module = {};
    var privateVariable = 7;
    
    function privateVariable() {
        // ..
    }

    module.moduleProperty = 1;
    module.moduleMethod = function () {
        // ..
    }

    return module;
}());