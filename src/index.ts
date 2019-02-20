declare var console: any;

import Calc from "calculator";

let c = new Calc()
console.log(c.add(1, 2))
console.log(c.substract(1, 2))
console.log(c.multiply(1, 2))
console.log(c.divide(1, 2))

import { Point, createLine } from "awesome-geometry";

console.log(createLine(new Point(0, 0), new Point(3, 4)))