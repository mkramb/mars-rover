import { COORDINATES } from './grid';

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

let _value = Symbol('value');
let _direction = Symbol('direction');
let _obstacles = Symbol('obstacles');
let _grid = Symbol('grid');

class Position {

    constructor(grid, position, direction, obstacles) {
        this[_value] = Array.isArray(position) ? position : [0, 0];
        this[_direction] = direction;
        this[_obstacles] = obstacles;
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

                newPosition[move.axis] += (
                    move.value * command.move
                );

                if (
                    this[_obstacles].hasObstacle(...newPosition) ||
                    this[_grid].isOutOfBounds(...newPosition)
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
