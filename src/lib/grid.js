
const COORDINATES = {
    X: 0,
    Y: 1
};

const resetPoint = (position, max) =>
    (position > max) ? max : Math.max(0, position);

let _value = Symbol('value');

class Grid {

    constructor(value) {
        this[_value] = Array.isArray(value) ? value : [100, 100]
    }

    isOutOfBounds(x, y) {
        return (
            (x > this[_value][COORDINATES.X] || x < 0) ||
            (y > this[_value][COORDINATES.X] || y < 0)
        );
    }

    getValidPoint(x, y) {
        return [
            resetPoint(x, this[_value][COORDINATES.X]),
            resetPoint(y, this[_value][COORDINATES.Y])
        ];
    }

}

export {
    Grid,
    COORDINATES
};
