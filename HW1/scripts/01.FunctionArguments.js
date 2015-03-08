function printArgsInfo() {
    for (var key in arguments) {
        if (arguments.hasOwnProperty(key)) {
            console.log(arguments[key]+" ("+typeof(arguments[key])+")");
        }
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log();
printArgsInfo(null, undefined, "", 0, [], {});
console.log();
printArgsInfo([1, 2], ["string", "array"], ["single value"]);