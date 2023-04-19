import { Species, Animal, Farm } from './types';

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


