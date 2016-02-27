const COORDINATES = {
    X: 0,
    Y: 1
};

let _size = Symbol('size');
let _obstacles = Symbol('obstacles');

class Grid {

    constructor(grid, obstacles) {
        let minItemLength = Object.keys(COORDINATES).length;

        this[_size] = Array.isArray(grid) ? grid : [100, 100];
        this[_obstacles] = (Array.isArray(obstacles) ? obstacles : [])
            .filter((item) =>
                Array.isArray(item) && item.length >= minItemLength
            );
    }

    isOutOfBounds(x, y) {
        return (
            (x > this[_size][COORDINATES.X] || x < 0) ||
            (y > this[_size][COORDINATES.Y] || y < 0)
        );
    }

    hasObstacle(x, y) {
        return this[_obstacles].find((item) =>
            item[COORDINATES.X] === x && item[COORDINATES.Y] === y
        );
    }

}

export {
    Grid,
    COORDINATES
};
