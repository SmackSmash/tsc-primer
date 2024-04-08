interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(name, year, broken);
};

printVehicle(oldCivic);
