import Rover from '../src/rover';

describe('Rover', function() {

    it('should be able to move on grid', function() {
        let rover = new Rover({
            grid: [10, 7],
            position: [0, 0],
            direction: 0
        });

        rover.move('RULUUULU');

        expect(rover.position).deep.equal([0, 3]);
    });

    it('should be able to handle starting direction', function() {
        let rover = new Rover({
            grid: [10, 10],
            position: [0, 0],
            direction: 90
        });

        rover.move('UUULLUUU');

        expect(rover.position).deep.equal([0, 0]);
    });

    it('should be able to stop when it falls of the grid', function() {
        let rover = new Rover({
            grid: [11, 7],
            position: [0, 3],
            direction: 0
        });

        rover.move('UUUUU');

        expect(rover.position).deep.equal([0, 7]);
    });

    it('should be able to stop when it hits an obstacle', function() {
        let rover = new Rover({
            grid: [10, 7],
            position: [0, 0],
            direction: 0,
            obstacles: [
                [1, 3],
            ]
        });

        rover.move('RULUUULU');

        expect(rover.position).deep.equal([1, 2]);
    });

    it('should be able to do a full circle', function() {
        let rover = new Rover({
            grid: [9, 3],
            position: [0, 0],
            direction: 0,
            obstacles: [
                [2,2]
            ]
        });

        rover.move('UURUURUURUU');

        expect(rover.position).deep.equal([1, 2]);
    });

});
