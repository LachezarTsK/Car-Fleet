
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const cars = new Array(position.length);
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

/**
 * @param {number} target
 * @param {number} position
 * @param {number} speed
 * @return {number}
 */
function getTimeToReachTarget(target, position, speed) {
    return (target - position) / speed;
}

class Car {

    /**
     * @param {number} position
     * @param {number} speed
     */
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
    }
}
