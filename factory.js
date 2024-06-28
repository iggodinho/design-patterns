// Factory - fornece uma interface para criar objetos em uma superclasse, 
// mas permite que as subclasses alterem o tipo de objetos que serão criados

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class Bike {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class VehicleFactory {
    createVehicle(type, model, price) {
        if (type === "car") {
            return new Car(model, price);
        } else if (type === "bike") {
            return new Bike(model, price);
        }
    }
}

const factory = new VehicleFactory();
const car = factory.createVehicle("car", "Toyota", 30000);
const bike = factory.createVehicle("bike", "Yamaha", 15000);

console.log(car);
console.log(bike);
