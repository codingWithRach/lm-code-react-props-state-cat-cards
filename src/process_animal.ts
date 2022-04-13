import Animal from "./data/animal";
import { AnimalType } from "./data/animal_type";

export function getNewAnimal(
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
