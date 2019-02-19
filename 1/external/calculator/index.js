function Calculator() {
    this.add = function(a, b) { return a + b }
    this.substract = function(a, b) { return a - b }
    this.multiply = function(a, b) { return a * b }
    this.divide = function(a, b) {
        if (b == 0) {
            throw "Can't divide by zero!"
        }
        return a / b
    }
}

module.exports = Calculator




