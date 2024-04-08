// Public, private, and protected clases
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  wheels: number = 4;

  constructor(color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
}

const corsa = new Car('red');

console.log(corsa);
