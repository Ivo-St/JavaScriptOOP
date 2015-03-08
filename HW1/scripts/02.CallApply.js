function printArgsInfo() {
    for (var key in arguments) {
        if (arguments.hasOwnProperty(key)) {
            console.log(arguments[key]+" ("+typeof(arguments[key])+")");
        }
    }
}

console.log("Call without args\n");
printArgsInfo.call();
console.log("Call with args");
printArgsInfo.call(2, 3, 2.5, -110.5564, false);
console.log("Apply without args\n");
printArgsInfo.apply();
console.log("Apply with args");
printArgsInfo.apply(null,[2, 3, 2.5, -110.5564, false]);