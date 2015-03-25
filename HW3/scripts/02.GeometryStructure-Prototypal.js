var geometryStructure = (function () {
    Object.prototype.extends = function (properties) {
        function F() {
        }

        var prop;
        F.prototype = Object.create(this);
        for (prop in properties) {
            F.prototype[prop] = properties[prop];
        }

        F.prototype._super = this;
        return new F();
    };

    var point = {
        init: function (x, y) {
            this.setX(x);
            this.setY(y);

            return this;
        },
        setX: function setX(value) {
            if (!value) {
                throw new Error("X cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("X must be valid number.");
            }

            this._x = value;
        },
        setY: function setY(value) {
            if (!value) {
                throw new Error("Y cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("Y must be valid number.");
            }

            this._y = value;
        },
        getX: function getX() {
            return this._x;
        },
        getY: function getY() {
            return this._y;
        },
        serialize: function () {
            return "X: " + this.getX() + " Y: " + this.getY();
        }
    };

    var shape = {
        init: function init(color) {
            this.setColor(color);
            return this;
        },
        setColor: function setColor(value) {
            var regexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            if (!regexColor.test(value)) {
                throw new Error("Invalid Color.");
            }
            this._color = value;
        },
        getColor: function getColor() {
            return this._color;
        }
    };

    var circle = shape.extends({
        init: function init(o, r, color) {
            this._super.init.call(this, color);
            this.setCenter(o);
            this.setRadius(r);

            return this;
        },
        setCenter: function setCenter(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("Center must be instance of point");
            }

            this._center = value;
        },
        setRadius: function setRadius(value) {
            if (!value) {
                throw new Error("Radius cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("Radius must be valid number.");
            }

            this._radius = value;
        },
        getCenter: function () {
            return this._center;
        },
        getRadius: function () {
            return this._radius;
        },
        serialize: function () {
            return "Center: " + this.getCenter().serialize().toString() +
                "\nRadius: " + this.getRadius() + "\nColor: " + this.getColor();
        }
    });

    var rectangle = shape.extends({
        init: function rectangle(A, width, height, color) {
            this._super.init.call(this, color);
            this.setA(A);
            this.setHeight(height);
            this.setWidth(width);
            this.setColor(color);
        },
        setA: function setA(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("A must be instance of point");
            }

            this._a = value;
        },
        setHeight: function setHeight(value) {
            if (isNaN(value)) {
                throw new Error("Height must be valid number.");
            }

            this._height = value;
        },
        setWidth: function setWidth(value) {
            if (isNaN(value)) {
                throw new Error("Width must be valid number.");
            }

            this._width = value;
        },
        getA: function getA() {
            return this._a;
        },
        getHeight: function getHeight() {
            return this._height;
        },
        getWidth: function getWidth() {
            return this._width;
        },
        serialize: function serialize() {
            return "A: " + this.getA().serialize() + "\nHeight: " + this.getHeight() +
                "\nWidth: " + this.getWidth() + "\nColor: " + this.getColor();
        }
    });

    var triangle = shape.extends({
        init: function triangle(A, B, C, color) {
            this._super.init.call(this, color);
            this.setA(A);
            this.setB(B);
            this.setC(C);
        },
        setA: function setA(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("A must be instance of point.");
            }

            this._a = value;
        },
        setB: function setB(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("B must be instance of point.");
            }

            this._b = value;
        },
        setC: function setC(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("C must be instance of point.");
            }

            this._c = value;
        },
        getA: function getA() {
            return this._a;
        },
        getB: function getB() {
            return this._b;
        },
        getC: function getC() {
            return this._c;
        },
        serialize: function serialize() {
            return "A: " + this.getA().serialize() + "\nB: " + this.getB().serialize() +
                "\nC: " + this.getC().serialize() + "\nColor: " + this.getColor();
        }
    });

    var line = shape.extends({
        init: function Line(A, B, color) {
            this._super.init.call(this, color);
            this.setA(A);
            this.setB(B);
        },
        setA: function setA(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("A must be instance of point.");
            }

            this._a = value;
        },
        setB: function setB(value) {
            if (!point.isPrototypeOf(value)) {
                throw new Error("B must be instance of point.");
            }

            this._b = value;
        },
        getA: function getA() {
            return this._a;
        },
        getB: function getB() {
            return this._b;
        },
        serialize: function serialize() {
            return "A: " + this.getA().serialize() + "\nB: " + this.getB().serialize() +
                "\nColor: " + this.getColor();
        }
    });

    var segment = line;

    return {
        Point: point,
        Circle: circle,
        Rectangle: rectangle,
        Triangle: triangle,
        Line: line,
        Segment: segment
    };
}());

var point1 = Object.create(geometryStructure.Point);
var point2 = Object.create(geometryStructure.Point);
var point3 = Object.create(geometryStructure.Point);
point1.init(1, 1);
point2.init(22, 45);
point3.init(12, 123);

var circleTest = Object.create(geometryStructure.Circle);
circleTest.init(point1, 1, "#AA33FF");
console.log(circleTest.serialize());
console.log();

var rectangleTest = Object.create(geometryStructure.Rectangle);
rectangleTest.init(point1, 23, 2, "#AA13FF");
console.log(rectangleTest.serialize());
console.log();

var triangleTest = Object.create(geometryStructure.Triangle);
triangleTest.init(point1, point2, point3, "#AA33AF");
console.log(triangleTest.serialize());
console.log();

var lineTest = Object.create(geometryStructure.Line);
lineTest.init(point1, point2, "#AA21AF");
console.log(lineTest.serialize());
console.log();

var segmentTest = Object.create(geometryStructure.Segment);
segmentTest.init(point2, point3, "#BA33FF");
console.log(segmentTest.serialize());