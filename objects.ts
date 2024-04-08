const profile: { name: string; age: number; coords: { x: number; y: number }; setAge: Function } = {
  name: 'Alex',
  age: 20,
  coords: {
    x: 20,
    y: 30
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// Destructuring
const { age }: { age: number } = profile;

const {
  coords: { x, y }
}: { coords: { x: number; y: number } } = profile;
