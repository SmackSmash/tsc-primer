// Always add return type so TS will check your return statement
const add = (a: number, b: number): number => a + b;

// Works the same way with function declarations
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
