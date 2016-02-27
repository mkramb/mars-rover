import Position from './lib/position';

const isString = (obj) =>
    Object.prototype.toString.call(obj) === '[object String]';

const splitCommands = (input) =>
    (isString(input) && input.length) ? input.split('') : [];

let _position = Symbol('position');

class Rover {

    constructor({
        grid,
        position,
        direction
    }) {
        this[_position] = new Position(
            position, direction, grid
        );
    }

    move(input) {
        splitCommands(input).every((command) => {
            return !(this[_position].move(command));
        });
    }

    get position() {
        return this[_position].current;
    }

}

export default Rover;
