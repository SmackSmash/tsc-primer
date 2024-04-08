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

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date()); // Valid
importantDates.push('2024-04-07'); // Valid

// Tuples
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
// A tuple is an ordered sequence of values
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Can define type for tuples
type Drink = [string, boolean, number];
// And apply them to variables
const fanta: Drink = ['orange', true, 30];
