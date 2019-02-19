
function createRandom(whatDoYouWant) {
    if (whatDoYouWant === "line") {
        return createLine(createRandom("point"), createRandom("point"))
    }
    else if (whatDoYouWant === "point") {
        return new Point(Math.random(), Math.random())
    }
    else {
        throw "This case has not been implemented..."
    }
}


function calculateLength(p0, p1) {
    return Math.sqrt( Math.pow(p1.x - p0.x) + Math.pow(p1.y - p0.y) )
}

function createLine(p0, p1) {
    return {
        starts: p0,
        ends: p1,
        lenght: calculateLength(p0, p1)
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

module.exports = { createLine, Point, createRandom }
