
import Rover from '../src/rover';

describe('Rover', function() {

    it('should be able to move on grid by RULUUULU', function() {
        let rover = new Rover({
            grid: [10, 7],
            position: [0, 0],
            direction: 0
        });

        rover.move('RULUUULU');

        expect(rover.position).deep.equal([0, 3]);
    });

});
