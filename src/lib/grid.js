const COORDINATES = {
    X: 0,
    Y: 1
};

let _value = Symbol('value');

class Grid {

    constructor(value) {
        this[_value] = Array.isArray(value) ? value : [100, 100];
    }

    isOutOfBounds(x, y) {
        return (
            (x > this[_value][COORDINATES.X] || x < 0) ||
            (y > this[_value][COORDINATES.Y] || y < 0)
        );
    }

}

export {
    Grid,
    COORDINATES
};
