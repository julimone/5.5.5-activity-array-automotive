
import { Vehicle } from "./vehicleBaseClass.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassangers = 6;
        this.passanger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100
        this.scheduleService = false;
    }
}
loadPassangers(num) {
    if (this.passanger < this.maximumPassangers) {
        if ((num + this.passanger) <= this.maximumPassangers) {
            this.passanger = num;
            return this.passanger;
        }
        else {
            console.log("No room in this car for more passangers")
        }

    }
}

start() {
    if (this.fuel > 0) {
        this.started == true
        console.log("The engine has started")
    }
    else {
        return this.started = false
    }
}

scheduleService(mileage) {
    if (this.mileage > 3000) {
        this.scheduleService == true
        return
    }

}
