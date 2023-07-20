// defines an E6 class called Car that creates 
  // a new object using a constructor with the following properties: make, model, and year

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
// Add a method called getDescription to the Car class, 
  // which returns a string containing information about the car.
  getDescription() {
    return `This car is a gorgeous ${this.year} ${this.make} ${this.model}.`;}}

// Define the electricCar class as a subclass of Car
    //  Include an additional property called range
class electricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
//  override the getDescription method of the Car class with a new implementation with range included
  getDescription() {
    return `This is not only a gorgeous ${this.year} ${this.make} ${this.model}, it also has a range of ${this.range} miles.`;
  }
}

const teslaModelS = new electricCar("Tesla", "Model S", 2019, 300);
const description = teslaModelS.getDescription();

console.log(description);