import Position from './lib/position';
import Direction from './lib/direction';
import { Grid } from './lib/grid';

const isString = (obj) =>
    Object.prototype.toString.call(obj) === '[object String]';

const splitCommands = (input) =>
    (isString(input) && input.length) ? input.split('') : [];

let _position = Symbol('position');

class Rover {

    constructor({
        size,
        position,
        direction,
        obstacles
    }) {
        let grid = new Grid(size, obstacles);
        let initialDirection = new Direction(direction);

        this[_position] = new Position(
            position, initialDirection, grid
        );

        if (grid.isOutOfBounds(...this[_position].current)) {
            throw new Error('Initial position is out of bounds');
        }
    }

    move(input) {
        splitCommands(input).every((command) => {
            return this[_position].move(command) !== false;
        });
    }

    get position() {
        return this[_position].current;
    }

}

export default Rover;
