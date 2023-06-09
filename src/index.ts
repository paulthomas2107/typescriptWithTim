import { Species, Animal, Farm, Monkey, Dog, Fish } from './types';

let x: number = 3;
let y: string = 'oaaa';
let possible: boolean = true;
let hello: any = 217.22;
hello = 'paul';

const paul = 'paul';
// paul - 8

let x1: unknown;

function f1(num1: number, s1: string, b1: boolean, poss: any): void {
  // returns nothing
}

function f2(): string {
  // returns a string
  return 'Paul';
}

function f3(num1: number, num2: number): number {
  return num1 ** num2 / 2;
}

var va1: null = null;
var va2: undefined = undefined;

var nums: number[] = [1, 2, 2, 3.14];
var d2: number[][] = [[1, 2, 3, 4]];
var obj1: [string, number] = ['paul', 217];
var obj2: object = {
  paul: 122,
  Thomas: 7278,
};

const species1 = {
  id: 123,
  name: 'Dog',
} as Species;

const animal1: Animal = {
  id: 456,
  name: 'Lassie',
  type: species1,
  age: 12,
  siblings: ['Masie', 'Doggo'],
  optional_sex: true,
} as Animal;

const printAnimal = (animal: Animal) => {
  console.log(animal);
};

printAnimal(animal1);

const monkey1: Monkey = {
  diet: 'Nuts',
  id: 456,
  name: 'Lassie',
  type: species1,
  age: 12,
  siblings: ['Masie', 'Doggo'],
  optional_sex: true,
};

printAnimal(monkey1);

const set1 = new Set<Animal>();
set1.add(animal1);
set1.add(monkey1);

interface AnimalInt {
  name: string;
}

const p2 = (animal: AnimalInt) => {
  console.log(animal.name);
};

enum ShirtSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

// Enums
const getShirtPrice = (shirtSize: ShirtSize) => {
  switch (shirtSize) {
    case ShirtSize.Small:
      return 10;
    case ShirtSize.Medium:
      return 20;
    case ShirtSize.Large:
      return 30;
  }
};

const price3 = getShirtPrice(ShirtSize.Medium);
console.log(price3);

const isFish = (animal: Fish | Dog): animal is Fish => {
  return (animal as Fish).swim !== undefined;
};

const calAnimalFunc = (animal: Fish | Dog) => {
  if (isFish(animal)) animal.swim();
  else animal.bark();
};

let x3: number = 2;
// @ts-ignore
x3 = 'Hello';
