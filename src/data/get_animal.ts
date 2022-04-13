import Animal from "./animal";
import { AnimalType } from "./animal_type";

export function getAnimal(
  name: string,
  value: string,
  animalType: AnimalType,
  animal: Animal
): Animal {
  if (name === "favFoods") {
    return {
      ...animal,
      [name]: value.split(", "),
      animalType: animalType,
    };
  } else {
    return {
      ...animal,
      [name]: value,
      animalType: animalType,
    };
  }
}

export function getDefaultAnimal(): Animal {
  return {
    animalType: "Cat",
    name: "",
    species: "",
    favFoods: [],
    birthYear: new Date().getFullYear(),
    id: "",
  };
}
