// Public, private, and protected clases
class Vehicle {
  // Assign variables by prefixing with 'public' in constructor args
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
}

const corsa = new Car(4, 'red');

console.log(corsa);
