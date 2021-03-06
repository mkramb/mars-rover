import Rover from '../src/rover';

describe('Mars Rover', function() {

    it('should be able to move on the grid', function() {
        let rover = new Rover({
            size: [10, 7],
            direction: 0
        });

        rover.move('RULUUULU');

        expect(rover.position).deep.equal([0, 3]);
    });

    it('should be able to move from initial orientation', function() {
        let roverA = new Rover({
            size: [10, 10],
            position: [0, 0],
            direction: 90
        });

        roverA.move('UUULLUUU');

        let roverB = new Rover({
            size: [3, 9],
            position: [3, 3],
            direction: 180
        });

        roverB.move('UUURU');

        expect(roverA.position).deep.equal([0, 0]);
        expect(roverB.position).deep.equal([2, 0]);
    });

    it('should be able to stop when initial position is out of bounds', function() {
        expect(() =>
            new Rover({
                size: [10, 7],
                position: [10, 10],
                direction: 0
            })
        ).to.throw('Initial position is not valid');
    });

    it('should be able to stop when initial position contains obstacle', function() {
        expect(() =>
            new Rover({
                size: [10, 7],
                position: [10, 4],
                direction: 0,
                obstacles: [
                    [10, 4]
                ]
            })
        ).to.throw('Initial position is not valid');
    });

    it('should be able to stop when it falls of the grid', function() {
        let rover = new Rover({
            size: [11, 7],
            position: [0, 3],
            direction: 0
        });

        rover.move('UUUUU');

        expect(rover.position).deep.equal([0, 7]);
    });

    it('should be able to stop when it hits an obstacle', function() {
        let roverA = new Rover({
            size: [10, 7],
            position: [1, 2],
            direction: 0
        });

        roverA.move('U');

        let roverB = new Rover({
            size: [10, 7],
            position: [0, 0],
            direction: 0,
            obstacles: [
                roverA.position
            ]
        });

        roverB.move('RULUUULU');

        expect(roverA.position).deep.equal([1, 3]);
        expect(roverB.position).deep.equal([1, 2]);
    });

    it('should be able to do a full circle', function() {
        let rover = new Rover({
            size: [9, 3],
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
