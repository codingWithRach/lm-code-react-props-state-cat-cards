import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import AnimalCard from "./animal_card";
import AnimalRadiobuttons from "./animal_radiobuttons";
import InputText from "./input_text";
import InputNumber from "./input_number";
import Button from "./button";

import { AnimalType } from "../data/animal_type";
import Animal from "../data/animal";
import catData from "../data/cat_data";
import dogData from "../data/dog-data";

const AnimalLayout: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);
  const [selectedAnimalType, setSelectedAnimalType] =
    useState<AnimalType>("Cat");
  const [animalName, setAnimalName] = useState<string>("");
  const [animalSpecies, setAnimalSpecies] = useState<string>("");
  const [animalFavFoods, setAnimalFavFoods] = useState<string>("");
  const [animalBirthYear, setAnimalBirthYear] = useState<number>(currentYear);

  let catCount = cats.length;
  let dogCount = dogs.length;

  const addAnimal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const animal: Animal = {
      animalType: selectedAnimalType,
      name: animalName,
      species: animalSpecies,
      favFoods: animalFavFoods.split(", "),
      birthYear: animalBirthYear,
      id: uuidv4(),
    };
    event.preventDefault();
    if (selectedAnimalType === "Cat") {
      setCats([...cats, animal]);
      catCount = cats.length;
    } else {
      setDogs([...dogs, animal]);
      dogCount = dogs.length;
    }

    setAnimalName("");
    setAnimalSpecies("");
    setAnimalFavFoods("");
    setAnimalBirthYear(currentYear);
  };

  const changeAnimal = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedAnimalType(event.target.value as AnimalType);
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {[...cats, ...dogs].map((animal, index) => (
            <AnimalCard
              animalType={animal.animalType}
              key={animal.id}
              name={animal.name}
              species={animal.species}
              favFoods={animal.favFoods}
              birthYear={animal.birthYear}
              animalIndex={index}
            />
          ))}
        </div>
        <form>
          <div className={`form form--${selectedAnimalType.toLowerCase()}`}>
            <h2 className="header__title">Enter details of another animal:</h2>
            <AnimalRadiobuttons
              selectedAnimalType={selectedAnimalType}
              values={["Cat", "Dog"]}
              onChangeHandler={changeAnimal}
            />
            <InputText
              value={animalName}
              onChange={setAnimalName}
              placeholder="Name..."
              labelText={`Please enter the name of the ${selectedAnimalType.toLowerCase()}`}
              idText="name"
            />
            <br />
            <InputText
              value={animalSpecies}
              onChange={setAnimalSpecies}
              placeholder="Species..."
              labelText={`Please enter the ${selectedAnimalType.toLowerCase()} species`}
              idText="species"
            />
            <br />
            <InputText
              value={animalFavFoods}
              onChange={setAnimalFavFoods}
              placeholder="Favourite foods..."
              labelText={`Please enter a comma separated list of the ${selectedAnimalType.toLowerCase()}'s favourite foods`}
              idText="fav_foods"
            />
            <br />
            <InputNumber
              value={animalBirthYear}
              onChange={setAnimalBirthYear}
              min="1990"
              max={currentYear.toString()}
              placeholder="Birth year..."
              labelText={`Please enter the ${selectedAnimalType.toLowerCase()}'s year of birth`}
              idText="birth_year"
            />
            <br />
            <Button label="Submit" clickFunction={addAnimal} />
            <br />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default AnimalLayout;
