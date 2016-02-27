
const X = 0;
const Y = 1;

const COMMANDS = {
    'L': { rotate: true, degree: -90 },
    'R': { rotate: true, degree: +90 },
    'U': { rotate: false, move: +1 },
    'D': { rotate: false, move: -1 }
};

const MOVES = {
    'NORTH': { axis: Y, value: +1 },
    'EAST':  { axis: X, value: +1 },
    'SOUTH': { axis: Y, value: -1 },
    'WEST':  { axis: X, value: -1 }
};

let _position = Symbol('position');
let _direction = Symbol('direction');

class Position {

    constructor(position, direction) {
        if (!Array.isArray(position)) {
            position = [0, 0];
        }

        this[_position] = position;
        this[_direction] = direction;
    }

    move(input) {
        let command = COMMANDS[input];

        if (command) {
            if (command.rotate) {
                this[_direction].rotate(command.degree);
            }
            else {
                let move = MOVES[this[_direction].name];

                this[_position][move.axis] += (
                    move.value * command.move
                );
            }
        }
    }

    get current() {
        return this[_position];
    }

}

export default Position;
