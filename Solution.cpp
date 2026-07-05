
#include <vector>
#include <ranges>
#include <algorithm>
using namespace std;

class Solution {

    struct Car {
        int position;
        int speed;

        Car(int position, int speed) : position{ position }, speed{ speed } {}
    };

public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        vector<Car> cars;
        cars.reserve(position.size());

        cars.reserve(position.size());
        for (int i = 0; i < position.size(); ++i) {
            cars.emplace_back(position[i], speed[i]);
        }
        ranges::sort(cars, [](const Car& x, const Car& y) {return x.position < y.position; });

        int numberOfCarFleets = position.size();
        for (int i = position.size() - 1; i > 0; --i) {
            if (getTimeToReachTarget(target, cars[i - 1].position, cars[i - 1].speed)
                <= getTimeToReachTarget(target, cars[i].position, cars[i].speed)) {
                cars[i - 1].position = cars[i].position;
                cars[i - 1].speed = min(cars[i - 1].speed, cars[i].speed);
                --numberOfCarFleets;
            }
        }

        return numberOfCarFleets;
    }

private:
    double getTimeToReachTarget(int target, int position, int speed) {
        return (static_cast<double>(target) - position) / speed;
    }
};
