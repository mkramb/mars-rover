Mars Rover
========

An API that moves a rover around Mars, which is modelled as a rectangular grid.

* The rover will be giving a starting coordinate and direction it is facing.
* The rover will take four commands, left (L), right (R), up (U) and down (D).
* On the commands left or right, the rover will rotate -90 or +90 degrees and remain in the same
grid position.
* On the commands up or down, the rover will move one grid position according to the rotation of
the rover.
* If the rover attempts to move off the grid it should stop moving.
* If the rover encounters another rover in the same grid position it should stop moving before
moving to the grid position.
* When the rover stops moving it should log out its final position.

**Installing**

    npm install

**Running Tests**

    npm test
    npm start

**Api Example**

    let rover = new Rover({
        size: [9, 3],
        position: [0, 0],
        direction: 0,
        obstacles: [
            [2,2]
        ]
    });

    rover.move('UURUURUURUU');

    expect(rover.position).deep.equal([1, 2])
