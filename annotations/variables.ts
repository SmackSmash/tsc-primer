// ALL THESE TYPE ANNOTATIONS ARE AUTOMATICAALLY INFERRED
// DON'T NEED TO WRITE ANY OF THEM!

// Basics
let firstName: string = 'Dan';
let age: number = 37;
let isDepressed: boolean = true;
let nothing: null = null;
let moreNothing: undefined = undefined;
let now: Date = new Date();

// Arrays
let arr: any[] = ['red', 5, false];
let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = { x: 20, y: 20 };

// Functions
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};

// WHEN TO USE ANNOTATIONS
// 1) Function that returns 'any' type
const json = '{ "x": 10, "y": 20 }';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);
