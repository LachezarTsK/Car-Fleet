
class Solution {

    private data class Car(var position: Int, var speed: Int) {}

    fun carFleet(target: Int, position: IntArray, speed: IntArray): Int {
        val cars = arrayOfNulls<Car>(position.size)
        for (i in position.indices) {
            cars[i] = Car(position[i], speed[i])
        }
        cars.sortWith() { x, y -> x!!.position - y!!.position }

        var numberOfCarFleets = position.size;
        for (i in position.size - 1 downTo (1)) {
            if (getTimeToReachTarget(target, cars[i - 1]!!.position, cars[i - 1]!!.speed)
                <= getTimeToReachTarget(target, cars[i]!!.position, cars[i]!!.speed)) {
                cars[i - 1]!!.position = cars[i]!!.position
                cars[i - 1]!!.speed = Math.min(cars[i - 1]!!.speed, cars[i]!!.speed)
                --numberOfCarFleets
            }
        }

        return numberOfCarFleets
    }

    private fun getTimeToReachTarget(target: Int, position: Int, speed: Int): Double {
        return (target.toDouble() - position) / speed
    }
}
