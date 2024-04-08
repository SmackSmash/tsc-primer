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
