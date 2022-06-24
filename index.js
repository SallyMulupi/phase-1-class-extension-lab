// Your code hereclass Polygon {
constructor(sides); {
    this.sides = sides;
}
get = countSides(); {
    return this.sides.length;
}
get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.sides.length; i++) {
        sum += this.sides[i];
    }
    return sum;
}
class Triangle extends Polygon {
    constructor(sides) {
        super(sides);
    }
    get isvalid() {
        if (this.countSides == 3) {
            return true;
        }
    }
    get area() {
        if (this.isvalid) {
            let s = this.perimeter / 2;
            return Math.sqrt(s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]));
        }
    }
}