class Car {
    constructor(make, model, year, price, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
        this.mileage = mileage;
    }

    getMake() {
        return this.make;
    }

    setMake(make) {
        this.make = make;
    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        this.model = model;
    }

    getYear() {
        return this.year;
    }

    setYear(year) {
        this.year = year;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getMileage() {
        return this.mileage;
    }

    setMileage(mileage) {
        this.mileage = mileage;
    }

    displayInfo() {
        console.log("Car Info:");
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
        console.log(`Color: ${this.color}`);
        console.log(`Mileage: ${this.mileage}\n`);
    }
}

export { Car };
