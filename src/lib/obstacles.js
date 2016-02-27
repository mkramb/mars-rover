import { COORDINATES } from './grid';

let _value = Symbol('value');

class Obstacles {

    constructor(value) {
        this[_value] = Array.isArray(value) ? value : [];
        this[_value] = this[_value].filter(Array.isArray);
    }

    hasObstacle(x, y) {
        return this[_value].find((item) =>
            item[COORDINATES.X] === x && item[COORDINATES.Y] === y
        );
    }

}

export default Obstacles;
