// Public, private, and protected clases
class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  wheels: number;

  constructor(color: string) {
    super(color);
    this.wheels = 4;
  }
  private drive(): void {
    console.log('vroom');
  }
}

const corsa = new Car('red');

console.log(corsa);
