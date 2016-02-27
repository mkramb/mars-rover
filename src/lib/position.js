
import Orientation from './orientation';
import { Grid, COORDINATES } from './grid';

const COMMANDS = {
    'L': { rotate: true, degree: -90 },
    'R': { rotate: true, degree: +90 },
    'U': { rotate: false, move: +1 },
    'D': { rotate: false, move: -1 }
};

const MOVES = {
    'NORTH': { axis: COORDINATES.Y, value: +1 },
    'EAST':  { axis: COORDINATES.X, value: +1 },
    'SOUTH': { axis: COORDINATES.Y, value: -1 },
    'WEST':  { axis: COORDINATES.X, value: -1 }
};

let _position = Symbol('position');
let _orientation = Symbol('orientation');
let _grid = Symbol('grid');

class Position {

    constructor(position, direction, grid) {
        this[_position] = Array.isArray(position) ? position : [0, 0];
        this[_orientation] = new Orientation(direction);
        this[_grid] = new Grid(grid);
    }

    move(input) {
        let command = COMMANDS[input];
        let shouldStop = !command;

        if (command) {
            if (command.rotate) {
                this[_orientation].rotate(command.degree);
            }
            else {
                let move = MOVES[this[_orientation].name];

                this[_position][move.axis] += (
                    move.value * command.move
                );
            }

            if (this[_grid].isOutOfBounds(...this[_position])) {
                shouldStop = true;
                this[_position] = this[_grid].getValidPoint(
                    ...this[_position]
                );
            }
        }

        return shouldStop;
    }

    get current() {
        return this[_position];
    }

}

export default Position;
