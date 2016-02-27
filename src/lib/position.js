import { COORDINATES } from './grid';

const COMMANDS = {
    'L': { rotate: true, degree: -90 },
    'R': { rotate: true, degree: +90 },
    'U': { rotate: false, direction: +1 },
    'D': { rotate: false, direction: -1 }
};

const MOVES = {
    'NORTH': { axis: COORDINATES.Y, value: +1 },
    'EAST':  { axis: COORDINATES.X, value: +1 },
    'SOUTH': { axis: COORDINATES.Y, value: -1 },
    'WEST':  { axis: COORDINATES.X, value: -1 }
};

let _value = Symbol('value');
let _direction = Symbol('direction');
let _grid = Symbol('grid');

class Position {

    constructor(position, direction, grid) {
        this[_value] = Array.isArray(position) ? position : [0, 0];
        this[_direction] = direction;
        this[_grid] = grid;
    }

    move(input) {
        let command = COMMANDS[input];

        if (command) {
            if (command.rotate) {
                this[_direction].rotate(command.degree);
            }
            else {
                let move = MOVES[this[_direction].orientation];
                var newPosition = this[_value].slice();

                newPosition[move.axis] += (move.value * command.direction);

                if (
                    this[_grid].isOutOfBounds(...newPosition) ||
                    this[_grid].hasObstacle(...newPosition)
                ) {
                    return false;
                }

                this[_value] = newPosition;
            }
        }
    }

    get current() {
        return this[_value];
    }

}

export default Position;
