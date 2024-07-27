class House {
    constructor(address, numberOfRooms, price, houseType, yearBuilt) {
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.price = price;
        this.houseType = houseType;
        this.yearBuilt = yearBuilt;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getNumberOfRooms() {
        return this.numberOfRooms;
    }

    setNumberOfRooms(numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getHouseType() {
        return this.houseType;
    }

    setHouseType(houseType) {
        this.houseType = houseType;
    }

    getYearBuilt() {
        return this.yearBuilt;
    }

    setYearBuilt(yearBuilt) {
        this.yearBuilt = yearBuilt;
    }

    displayInfo() {
        console.log("House Info:");
        console.log(`Address: ${this.address}`);
        console.log(`Number of Rooms: ${this.numberOfRooms}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
        console.log(`Type: ${this.houseType}`);
        console.log(`Year Built: ${this.yearBuilt}\n`);
    }
}

export { House };
