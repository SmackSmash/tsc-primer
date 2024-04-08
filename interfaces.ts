interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return 'This is an old Honda civic';
  }
};

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(name, year, broken);
};

printVehicle(oldCivic);
