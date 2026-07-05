
function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = new Array<Car>(position.length);
    for (let i = 0; i < position.length; ++i) {
        cars[i] = new Car(position[i], speed[i]);
    }
    cars.sort((x, y) => x.position - y.position);

    let numberOfCarFleets = position.length;
    for (let i = position.length - 1; i > 0; --i) {
        if (getTimeToReachTarget(target, cars[i - 1].position, cars[i - 1].speed)
            <= getTimeToReachTarget(target, cars[i].position, cars[i].speed)) {
            cars[i - 1].position = cars[i].position;
            cars[i - 1].speed = Math.min(cars[i - 1].speed, cars[i].speed);
            --numberOfCarFleets;
        }
    }

    return numberOfCarFleets;
};

function getTimeToReachTarget(target: number, position: number, speed: number): number {
    return (target - position) / speed;
}

class Car {
    constructor(public position: number, public speed: number) {
    }
}
