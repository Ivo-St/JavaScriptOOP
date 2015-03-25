function flatten() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array) {
            var flattened = this[i].flatten();
            for (var j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        }
        else {
            result.push(this[i]);
        }
    }

    return result;
}

Array.prototype.flatten = flatten;

var arr = [1, [2, 5, [6, 7, "str"], []], 3];

console.log(arr.flatten());