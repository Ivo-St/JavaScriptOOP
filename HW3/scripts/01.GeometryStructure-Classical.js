var geometryStructure = (function () {
    var Shape = (function () {
        function Shape() {
        }

        Shape.prototype.setColor = function (value) {
            var regexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            if (!regexColor.test(value)) {
                throw new Error("Invalid Color.");
            }

            this._color = value;
        };

        Shape.prototype.getColor = function () {
            return this._color;
        };

        return Shape;
    }());

    var Point = (function () {
        function Point(x, y) {
            this.setX(x);
            this.setY(y);
        }

        Point.prototype.setX = function (value) {
            if (!value) {
                throw new Error("X cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("X must be valid number.");
            }

            this._x = value;
        };

        Point.prototype.setY = function (value) {
            if (!value) {
                throw new Error("Y cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("Y must be valid number.");
            }

            this._y = value;
        };

        Point.prototype.getX = function () {
            return this._x;
        };

        Point.prototype.getY = function () {
            return this._y;
        };

        Point.prototype.toString = function () {
            return "X: " + this.getX() + " Y: " + this.getY();
        };

        return Point;
    }());

    var Circle = (function () {
        function Circle(o, r, color) {
            this.setCenter(o);
            this.setRadius(r);
            this.setColor(color);
        }

        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;

        Circle.prototype.setCenter = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("Center must be instance of Point");
            }

            this._center = value;
        };

        Circle.prototype.setRadius = function (value) {
            if (!value) {
                throw new Error("Radius cannot be undefined.");
            }
            else if (isNaN(value)) {
                throw new Error("Radius must be valid number.");
            }

            this._radius = value;
        };

        Circle.prototype.getCenter = function () {
            return this._center;
        };

        Circle.prototype.getRadius = function () {
            return this._radius;
        };

        Circle.prototype.toString = function () {
            return "Center: " + this.getCenter().toString() +
                "\nRadius: " + this.getRadius() + "\nColor: " + this.getColor();
        };

        return Circle;
    }());

    var Rectangle = (function () {
        function Rectangle(A, width, height, color) {
            this.setA(A);
            this.setHeight(height);
            this.setWidth(width);
            this.setColor(color);
        }

        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.setA = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("A must be instance of Point");
            }

            this._a = value;
        };

        Rectangle.prototype.setWidth = function (value) {
            if (isNaN(value)) {
                throw new Error("Width must be valid number.");
            }

            this._width = value;
        };

        Rectangle.prototype.setHeight = function (value) {
            if (isNaN(value)) {
                throw new Error("Height must be valid number.");
            }

            this._height = value;
        };

        Rectangle.prototype.getWidth = function () {
            return this._width;
        };

        Rectangle.prototype.getHeight = function () {
            return this._height;
        };

        Rectangle.prototype.getA = function () {
            return this._a;
        };

        Rectangle.prototype.toString = function () {
            return "A: " + this.getA().toString() + "\nHeight: " + this.getHeight() + "\nWidth: " +
                this.getWidth() + "\nColor: " + this.getColor();
        };

        return Rectangle;
    }());

    var Triangle = (function () {
        function Triangle(a, b, c, color) {
            this.setA(a);
            this.setB(b);
            this.setC(c);
            this.setColor(color);
        }

        Triangle.prototype = Object.create(Shape.prototype);
        Triangle.prototype.constructor = Triangle;

        Triangle.prototype.setA = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("A must be instance of Point");
            }

            this._a = value;
        };

        Triangle.prototype.setB = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("B must be instance of Point");
            }

            this._b = value;
        };

        Triangle.prototype.setC = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("C must be instance of Point");
            }

            this._c = value;
        };

        Triangle.prototype.getA = function () {
            return this._a;
        };

        Triangle.prototype.getB = function () {
            return this._b;
        };

        Triangle.prototype.getC = function () {
            return this._c;
        };

        Triangle.prototype.toString = function () {
            return "A: " + this.getA() + "\nB: " + this.getB() +
                "\nC: " + this.getC() + "\nColor: " + this.getColor();
        };

        return Triangle;
    }());

    var Line = (function () {
        function Line(a, b, color) {
            this.setA(a);
            this.setB(b);
            this.setColor(color);
        }

        Line.prototype = Object.create(Shape.prototype);
        Line.prototype.constructor = Line;

        Line.prototype.setA = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("A must be instance of Point");
            }

            this._a = value;
        };

        Line.prototype.setB = function (value) {
            if (!Point.prototype.isPrototypeOf(value)) {
                throw new Error("B must be instance of Point");
            }

            this._b = value;
        };

        Line.prototype.getA = function () {
            return this._a;
        };

        Line.prototype.getB = function () {
            return this._b;
        };

        Line.prototype.toString = function () {
            return "A: " + this.getA() + "\nB: " + this.getB() +
                "\nColor: " + this.getColor();
        };

        return Line;
    }());

    //I did this on purpose. In the task Segment and Line look the same.
    var Segment = Line;

    return {
        Point: Point,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };
}());

var point = new geometryStructure.Point(1, 2);
var point1 = new geometryStructure.Point(12, 552);
var point2 = new geometryStructure.Point(231, 224);
var test = new geometryStructure.Circle(point, 3, "#AA21AF");
console.log(test.toString());
console.log();
var rectangle = new geometryStructure.Rectangle(point, 1, 1, "#AA21AF");
console.log(rectangle.toString());
console.log();
var triangle = new geometryStructure.Triangle(point, point1, point2, "#AA21AF");
console.log(triangle.toString());
console.log();
var line = new geometryStructure.Line(point, point1, "#AA21AF");
console.log(line.toString());
console.log();
var segment = new geometryStructure.Segment(point1, point2, "#AA21AF");
console.log(segment.toString());