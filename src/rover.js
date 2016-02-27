import Position from './lib/position';
import Direction from './lib/direction';
import Obstacles from './lib/obstacles';
import { Grid } from './lib/grid';

const isString = (obj) =>
    Object.prototype.toString.call(obj) === '[object String]';

const splitCommands = (input) =>
    (isString(input) && input.length) ? input.split('') : [];

let _position = Symbol('position');

class Rover {

    constructor({
        grid,
        position,
        direction,
        obstacles
    }) {
        grid = new Grid(grid);

        this[_position] = new Position(
            grid, position, new Direction(direction), new Obstacles(obstacles)
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
