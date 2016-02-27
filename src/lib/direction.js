const ORIENTATION = [
    'NORTH',
    'EAST',
    'SOUTH',
    'WEST'
];

const getDirectionStep = (degree) => Math.floor(degree / 90);
const getDirectionIndex = (index) =>
    index < 0 ? (ORIENTATION.length + index) : index;

let _value = Symbol('value');

class Direction {

    constructor(value) {
        this[_value] = getDirectionIndex(
            Number.isInteger(value) ? getDirectionStep(value) : 0
        );
    }

    rotate (degree) {
        if (Number.isInteger(degree)) {
            this[_value] = (
                ORIENTATION.length + this[_value] + getDirectionStep(degree)
            ) % ORIENTATION.length;
        }
    }

    get orientation() {
        return ORIENTATION[this[_value]];
    }

}

export default Direction;
