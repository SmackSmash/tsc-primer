const manufacturers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// 2 dimensional arrays
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inferrence when extracting values
const car = manufacturers[0];
const myCar = manufacturers.pop();

// Prevent incompatible values
// manufacturers.push(100); // Won't compile

// Help with map
manufacturers.map((car: string): string => {
  // TS provides nice autocomplete for string type here
  return car.toUpperCase();
});
