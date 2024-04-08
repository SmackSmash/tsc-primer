// Interfaces
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic: Vehicle & Reportable = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'This is an old Honda civic';
  }
};

const printVehicle = ({ name }: Vehicle & Reportable): void => {
  console.log(name);
};

printVehicle(oldCivic);

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
    return this.color;
  }
};
