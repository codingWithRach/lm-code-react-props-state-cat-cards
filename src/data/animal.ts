import { AnimalType } from "./animal_type";
export default interface Animal {
  animalType: AnimalType;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  id?: string;
}
