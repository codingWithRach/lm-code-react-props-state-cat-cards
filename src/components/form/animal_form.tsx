import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AnimalRadiobuttons from "./animal_radiobuttons";
import InputText from "./input_text";
import InputNumber from "./input_number";
import Button from "./button";

import { AnimalType } from "../../data/animal_type";
import Animal from "../../data/animal";
import "./form.css";

interface AnimalFormProps {
  selectedAnimalType: AnimalType;
  setSelectedAnimalType(animalType: AnimalType): void;
  cats: Array<Animal>;
  catCount: number;
  setCats(cats: Array<Animal>): void;
  dogs: Array<Animal>;
  dogCount: number;
  setDogs(dogs: Array<Animal>): void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({
  selectedAnimalType,
  setSelectedAnimalType,
  cats,
  catCount,
  setCats,
  dogs,
  dogCount,
  setDogs,
}) => {
  const currentYear: number = new Date().getFullYear();
  const [animalName, setAnimalName] = useState<string>("");
  const [animalSpecies, setAnimalSpecies] = useState<string>("");
  const [animalFavFoods, setAnimalFavFoods] = useState<string>("");
  const [animalBirthYear, setAnimalBirthYear] = useState<number>(currentYear);

  const changeAnimalType = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedAnimalType(event.target.value as AnimalType);
  };

  const animalType = selectedAnimalType.toLowerCase();

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

  return (
    <form>
      <div className={`form form--${animalType}`}>
        <h2 className="form__text form__header">
          Enter details of another animal:
        </h2>
        <AnimalRadiobuttons
          selectedAnimalType={selectedAnimalType}
          values={["Cat", "Dog"]}
          onChangeHandler={changeAnimalType}
        />
        <br />
        <InputText
          value={animalName}
          onChange={setAnimalName}
          placeholder="Name..."
          labelText={`Please enter the name of the ${animalType}`}
          idText="name"
        />
        <br />
        <InputText
          value={animalSpecies}
          onChange={setAnimalSpecies}
          placeholder="Species..."
          labelText={`Please enter the ${animalType} species`}
          idText="species"
        />
        <br />
        <InputText
          value={animalFavFoods}
          onChange={setAnimalFavFoods}
          placeholder="Favourite foods..."
          labelText={`Please enter a comma separated list of the ${animalType}'s favourite foods`}
          idText="fav_foods"
        />
        <br />
        <InputNumber
          value={animalBirthYear}
          onChange={setAnimalBirthYear}
          min="1990"
          max={currentYear.toString()}
          placeholder="Birth year..."
          labelText={`Please enter the ${animalType}'s year of birth`}
          idText="birth_year"
        />
        <br />
        <br />
        <Button label="Submit" clickFunction={addAnimal} />
        <br />
      </div>
    </form>
  );
};

export default AnimalForm;
