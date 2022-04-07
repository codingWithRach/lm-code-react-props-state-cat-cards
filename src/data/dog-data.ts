import Animal from "./animal";
import { v4 as uuidv4 } from "uuid";

const dogData: Array<Animal> = [
  {
    animalType: "Dog",
    name: "Floofus",
    species: "Puppy",
    favFoods: ["marshmallows"],
    birthYear: 2020,
  },
  {
    animalType: "Dog",
    name: "Doofus",
    species: "Doggo",
    favFoods: ["porridge, dog food"],
    birthYear: 2010,
  },
  {
    animalType: "Dog",
    name: "Goofus",
    species: "Dog",
    favFoods: ["bouncy balls"],
    birthYear: 2015,
  },
];

dogData.forEach((dog) => (dog.id = uuidv4()));
export default dogData;
