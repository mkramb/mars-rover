
const DIRECTIONS = [ 'NORTH', 'EAST', 'SOUTH','WEST' ];

const getDirectionStep = (degree) => Math.floor(degree / 90)
const getDirectionIndex = (index) =>
    (index > (DIRECTIONS.length -1)) ? (index - DIRECTIONS.length) : index;

let _value = Symbol('value');

class Direction {

    constructor(value) {
        this[_value] = Number.isInteger(value) ?
            getDirectionIndex(value) : 0
    }

    rotate (degree) {
        if (Number.isInteger(degree)) {
            this[_value] = (
                DIRECTIONS.length + this[_value] + getDirectionStep(degree)
            ) % DIRECTIONS.length;
        }
    }

    get name() {
        return DIRECTIONS[this[_value]];
    }

}

export default Direction;
