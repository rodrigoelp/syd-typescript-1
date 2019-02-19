
var calculator = require("calculator")

var c = new calculator()
console.log(c.add(1, 2))
console.log(c.substract(1, 2))
console.log(c.multiply(1, 2))
console.log(c.divide(1, 2))

var { createLine, Point } = require("awesome-geometry")

let line = createLine(new Point(0, 0), new Point(3, 4))

console.log(line)
