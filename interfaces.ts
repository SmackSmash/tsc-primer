// Interfaces
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}
// Interface composition
const oldCivic: Vehicle & Reportable = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'This is an old Honda civic';
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

// Code reuse with interfaces
interface Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const drink: Drink & Reportable = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink is ${this.color}`;
  }
};

printSummary(drink);
