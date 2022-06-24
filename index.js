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