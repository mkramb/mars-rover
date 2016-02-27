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
        direction,
        obstacles
    }) {
        this[_position] = new Position(
            grid, position, direction, obstacles
        );
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
