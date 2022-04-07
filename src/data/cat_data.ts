import Animal from "./animal";

import { v4 as uuidv4 } from "uuid";

const catData: Array<Animal> = [
  {
    animalType: "Cat",
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
  },
  {
    animalType: "Cat",
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
  },
  {
    animalType: "Cat",
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
  },
  {
    animalType: "Cat",
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
  },
  {
    animalType: "Cat",
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
  },
  {
    animalType: "Cat",
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
  },
  {
    animalType: "Cat",
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
  },
  {
    animalType: "Cat",
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
  },
  {
    animalType: "Cat",
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
  },
  {
    animalType: "Cat",
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
  },
  {
    animalType: "Cat",
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
  },
  {
    animalType: "Cat",
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
  },
  {
    animalType: "Cat",
    name: "Captain Catface",
    species: "Sea Cattain",
    favFoods: ["fish", "rum"],
    birthYear: 2016,
  },
];

catData.forEach((cat) => (cat.id = uuidv4()));
export default catData;
