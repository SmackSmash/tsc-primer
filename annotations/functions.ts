// Always add return type so TS will check your return statement
const add = (a: number, b: number): number => a + b;

// Works the same way with function declarations
function divide(a: number, b: number): number {
  return a / b;
}

// and expressions
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void for no return value
const logger = (message: string): void => {
  console.log(message);
};

// never for when the function will be exited early
const throwError = (message: string): never => {
  throw new Error(message);
};
