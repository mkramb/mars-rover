
import Position from './position';
import Direction from './direction';

const isString = (obj) =>
    Object.prototype.toString.call(obj) === '[object String]';

const splitCommands = (input) =>
    (isString(input) && input.length) ? input.split('') : [];

let _grid = Symbol('grid');
let _position = Symbol('position');

class Rover {

    constructor({
        grid = [100, 100],
        position,
        direction
    }) {
        this[_grid] = grid;
        this[_position] = new Position(
            position, new Direction(direction)
        );
    }

    move(input) {
        splitCommands(input).forEach((command) => {
            this[_position].move(command);
        });
    }

    get position() {
        return this[_position].current;
    }

}

export default Rover;
