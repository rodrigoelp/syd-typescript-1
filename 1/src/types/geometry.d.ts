
declare module "awesome-geometry" {
    class Point {
        constructor(x: number, y: number);

        x: number;
        y: number;
    }

    interface Line {
        starts: Point;
        ends: Point;

        length: number;
    }

    function createLine(p0: Point, p1: Point): Line;

    export { createLine, Line, Point }
}