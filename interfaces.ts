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
  summary(): string {
    return 'This is an old Honda civic';
  }
};

const printVehicle = ({ name }: Vehicle): void => {
  console.log(name);
};

printVehicle(oldCivic);
