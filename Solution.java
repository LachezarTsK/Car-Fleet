
import java.util.Arrays;

public class Solution {

    public int carFleet(int target, int[] position, int[] speed) {
        Car[] cars = new Car[position.length];
        for (int i = 0; i < position.length; ++i) {
            cars[i] = new Car(position[i], speed[i]);
        }
        Arrays.sort(cars, (x, y) -> x.position - y.position);

        int numberOfCarFleets = position.length;
        for (int i = position.length - 1; i > 0; --i) {
            if (getTimeToReachTarget(target, cars[i - 1].position, cars[i - 1].speed)
                    <= getTimeToReachTarget(target, cars[i].position, cars[i].speed)) {
                cars[i - 1].position = cars[i].position;
                cars[i - 1].speed = Math.min(cars[i - 1].speed, cars[i].speed);
                --numberOfCarFleets;
            }
        }

        return numberOfCarFleets;
    }

    private double getTimeToReachTarget(int target, int position, int speed) {
        return ((double) target - position) / speed;
    }
}

class Car {

    int position;
    int speed;

    Car(int position, int speed) {
        this.position = position;
        this.speed = speed;
    }
}
