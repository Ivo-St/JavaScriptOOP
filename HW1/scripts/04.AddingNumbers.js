//execute this problem in Web browser

var add= (function () {
    var totalSum = 0;
    function add (value) {
        totalSum += value;

        return add;
    }

    add.toString = function(){return totalSum};

    return add;
})();

alert(add(1)(2)(3));
var test = add(1);
alert(test(99));
alert(add(1));