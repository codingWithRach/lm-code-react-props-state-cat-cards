import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AnimalRadiobuttons from "./animal_radiobuttons";
import InputText from "./input_text";
import InputNumber from "./input_number";
import Button from "./button";

import { AnimalType } from "../../data/animal_type";
import Animal from "../../data/animal";
import { getNewAnimal } from "../../process_animal";
import "./form.css";

const currentYear: number = new Date().getFullYear();
const defaultAnimal: Animal = {
  animalType: "Cat",
  name: "",
  species: "",
  favFoods: [],
  birthYear: currentYear,
  id: "",
};
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
  const [animal, setAnimal] = useState<Animal>(defaultAnimal);
  const [animalBirthYear, setAnimalBirthYear] = useState<number>(currentYear);
  const animalType = selectedAnimalType.toLowerCase();

  const changeAnimal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnimal(getNewAnimal(name, value, selectedAnimalType, animal));
  };

  const addAnimal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const animalToAdd: Animal = {
      ...animal,
      birthYear: animalBirthYear,
      id: uuidv4(),
    };
    event.preventDefault();
    if (selectedAnimalType === "Cat") {
      setCats([...cats, animalToAdd]);
      catCount = cats.length;
    } else {
      setDogs([...dogs, animalToAdd]);
      dogCount = dogs.length;
    }
    setAnimal(defaultAnimal);
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
          onChangeHandler={(event) =>
            setSelectedAnimalType(event.target.value as AnimalType)
          }
        />
        <br />
        <InputText
          id="name"
          value={animal.name}
          onChangeHandler={changeAnimal}
          placeholder="Name..."
          labelText={`Please enter the name of the ${animalType}`}
        />
        <br />
        <InputText
          id="species"
          value={animal.species}
          onChangeHandler={changeAnimal}
          placeholder="Species..."
          labelText={`Please enter the ${animalType} species`}
        />
        <br />
        <InputText
          id="favFoods"
          value={animal.favFoods.join(", ")}
          onChangeHandler={changeAnimal}
          placeholder="Favourite foods..."
          labelText={`Please enter a comma separated list of the ${animalType}'s favourite foods`}
        />
        <br />
        <InputNumber
          id="animalBirthYear"
          value={animalBirthYear}
          onChangeHandler={(event) =>
            setAnimalBirthYear(event.target.valueAsNumber)
          }
          min={1990}
          max={currentYear}
          placeholder="Birth year..."
          labelText={`Please enter the ${animalType}'s year of birth`}
        />
        <br />
        <br />
        <Button label="Submit" onClickHandler={addAnimal} />
        <br />
      </div>
    </form>
  );
};

export default AnimalForm;
