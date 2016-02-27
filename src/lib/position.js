import { COORDINATES } from './grid';

const COMMANDS = {
    'L': { rotate: true, degree: -90 },
    'R': { rotate: true, degree: +90 },
    'U': { rotate: false, step: +1 },
    'D': { rotate: false, step: -1 }
};

const ORIENTATIONS = {
    'NORTH': { axis: COORDINATES.Y, direction: +1 },
    'EAST':  { axis: COORDINATES.X, direction: +1 },
    'SOUTH': { axis: COORDINATES.Y, direction: -1 },
    'WEST':  { axis: COORDINATES.X, direction: -1 }
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
                let orientation = ORIENTATIONS[this[_direction].orientation];
                var newPosition = this[_value].slice();

                newPosition[orientation.axis] += (
                    command.step * orientation.direction
                );

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
