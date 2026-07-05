
package main
import "slices"

func carFleet(target int, position []int, speed []int) int {
    cars := make([]Car, len(position))
    for i := range position {
        cars[i] = Car{position[i], speed[i]}
    }

    slices.SortFunc(cars, func(x Car, y Car) int { return x.position - y.position })
    var numberOfCarFleets = len(position)

    for i := len(position) - 1; i > 0; i-- {
        if getTimeToReachTarget(target, cars[i - 1].position, cars[i - 1].speed) <=
            getTimeToReachTarget(target, cars[i].position, cars[i].speed) {
            cars[i - 1].position = cars[i].position
            cars[i - 1].speed = min(cars[i - 1].speed, cars[i].speed)
            numberOfCarFleets--
        }
    }

    return numberOfCarFleets
}

func getTimeToReachTarget(target int, position int, speed int) float64 {
    return float64(target - position) / float64(speed)
}

type Car struct {
    position int
    speed    int
}
