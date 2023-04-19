export type Species = {
  id: number;
  name: string;
};

export type Animal = {
  id: number;
  name: string;
  type: Species;
  age: number;
  siblings: string[];
  optional_sex?: boolean;
};
