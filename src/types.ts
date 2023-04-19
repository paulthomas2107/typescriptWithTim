export type Species = {
  id: number;
  name: string;
};

export type Animal = {
  id: number;
  name: string | number;
  type: Species;
  age: number;
  siblings: string[];
  optional_sex?: boolean;
};

export type Farm = {
  animals: Animal[];
  animalNamesToObject: {
    [name: string]: Animal;
  };
};

export type Monkey = {
  diet: string;
} & Animal;
