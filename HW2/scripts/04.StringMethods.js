String.prototype.startsWith = function startWith(substring) {
    if (this.length < substring.length) {
        return false;
    }

    for (var i = 0, end = substring.length; i < end; i++) {
        if (this[i] != substring[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.endsWith = function endsWith(substring) {
    if (this.length < substring.length) {
        return false;
    }

    for (var i = substring.length - 1, j = this.length - 1; i >= 0; i--, j--) {
        if (this[j] != substring[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.left = function (count) {
    if (count >= this.length) {
        return this.toString();
    }
    var result = "";
    for (var i = 0; i < count; i++) {
        result += this[i];
    }

    return result;
};

String.prototype.right = function (count) {
    if (count >= this.length) {
        return this.toString();
    }
    var result = [];
    for (var i = this.length - 1, j = 0; j < count; j++, i--) {
        result.push(this[i]);
    }

    result = result.reverse();
    return result.join("");
};

String.prototype.padLeft = function (count, character) {
    var result = "";

    for(var i=0; i<count; i++){
        result+=character;
    }

    result+=this;

    return result;
};

String.prototype.padRight = function (count, character) {
    var result = "";

    result+=this;

    for(var i=0; i<count; i++){
        result+=character;
    }

    return result;
};

String.prototype.repeat = function (count) {
    var result = "";

    for (var i = 0; i < count; i++) {
        result += this;
    }

    return result;
};

var str = "string";
console.log(str.startsWith("str"));
console.log(str.endsWith("ing"));
console.log(str.left(2));
console.log(str.right(2));
console.log(str.repeat(1));
console.log(str.padLeft(3,'*'));
console.log(str.padRight(3,'*'));