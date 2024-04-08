class Vehicle {
  drive(): void {
    console.log('Chugga chugga');
  }
  honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }
  drive(): void {
    console.log('vroom');
  }
}

const corsa = new Car();

corsa.drive();
