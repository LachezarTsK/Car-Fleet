
using System;

public class Solution
{
    public int CarFleet(int target, int[] position, int[] speed)
    {
        Car[] cars = new Car[position.Length];
        for (int i = 0; i < position.Length; ++i)
        {
            cars[i] = new Car(position[i], speed[i]);
        }
        Array.Sort(cars, (x, y) => x.position - y.position);

        int numberOfCarFleets = position.Length;
        for (int i = position.Length - 1; i > 0; --i)
        {
            if (GetTimeToReachTarget(target, cars[i - 1].position, cars[i - 1].speed)
                    <= GetTimeToReachTarget(target, cars[i].position, cars[i].speed))
            {
                cars[i - 1].position = cars[i].position;
                cars[i - 1].speed = Math.Min(cars[i - 1].speed, cars[i].speed);
                --numberOfCarFleets;
            }
        }

        return numberOfCarFleets;
    }

    private double GetTimeToReachTarget(int target, int position, int speed)
    {
        return ((double)target - position) / speed;
    }
}

class Car
{
    public int position;
    public int speed;

    public Car(int position, int speed)
    {
        this.position = position;
        this.speed = speed;
    }
}
