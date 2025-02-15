import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AnimalRadiobuttons from "./animal_radiobuttons";
import InputText from "./input_text";
import InputNumber from "./input_number";
import Button from "./button";

import { AnimalType } from "../../data/animal_type";
import Animal from "../../data/animal";
import { getAnimal, getDefaultAnimal } from "../../data/get_animal";
import "./form.css";
import { validForm } from "./validation";
import {
  IErrorMessageContext,
  useErrorMessage,
  useErrorMessageUpdate,
} from "../../context_providers/ErrorMessageContext";
import ErrorMessage from "../layout/error_message";

interface AnimalFormProps {
  cats: Array<Animal>;
  catCount: number;
  setCats(cats: Array<Animal>): void;
  dogs: Array<Animal>;
  dogCount: number;
  setDogs(dogs: Array<Animal>): void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({
  cats,
  catCount,
  setCats,
  dogs,
  dogCount,
  setDogs,
}) => {
  const defaultAnimal: Animal = getDefaultAnimal();
  const [selectedAnimalType, setSelectedAnimalType] = useState<AnimalType>(
    defaultAnimal.animalType
  );
  const [animal, setAnimal] = useState<Animal>(defaultAnimal);
  const [animalBirthYear, setAnimalBirthYear] = useState<number>(
    defaultAnimal.birthYear
  );
  const animalType = selectedAnimalType.toLowerCase();
  const errorMessages: IErrorMessageContext = useErrorMessage();
  const updateErrorMessages = useErrorMessageUpdate();

  const changeAnimal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnimal(getAnimal(name, value, selectedAnimalType, animal));
  };

  const resetAnimal = () => {
    setAnimal(defaultAnimal);
    setAnimalBirthYear(defaultAnimal.birthYear);
    setSelectedAnimalType(defaultAnimal.animalType);
  };

  const addAnimal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const animalToAdd: Animal = {
      ...animal,
      birthYear: animalBirthYear,
      id: uuidv4(),
    };
    event.preventDefault();
    if (validForm(animalToAdd, updateErrorMessages)) {
      if (selectedAnimalType === "Cat") {
        setCats([...cats, animalToAdd]);
        catCount = cats.length;
      } else {
        setDogs([...dogs, animalToAdd]);
        dogCount = dogs.length;
      }
      resetAnimal();
    }
  };

  return (
    <form>
      <div className={`form form--${animalType}`}>
        <h2 className="form__text form__header">
          Enter details of another animal:
        </h2>
        <div className="form__radiobuttongroup">
          <AnimalRadiobuttons
            selectedAnimalType={selectedAnimalType}
            values={["Cat", "Dog"]}
            onChangeHandler={(event) =>
              setSelectedAnimalType(event.target.value as AnimalType)
            }
          />
        </div>
        <div>
          <InputText
            id="name"
            value={animal.name}
            onChangeHandler={changeAnimal}
            placeholder="Name..."
            labelText={`Please enter the name of the ${animalType}`}
          />
        </div>
        {errorMessages.nameError.length > 0 && (
          <ErrorMessage
            animalType={selectedAnimalType}
            message={errorMessages.nameError}
          />
        )}
        <div>
          <InputText
            id="species"
            value={animal.species}
            onChangeHandler={changeAnimal}
            placeholder="Species..."
            labelText={`Please enter the ${animalType} species`}
          />
        </div>
        {errorMessages.speciesError.length > 0 && (
          <ErrorMessage
            animalType={selectedAnimalType}
            message={errorMessages.speciesError}
          />
        )}
        <div>
          <InputText
            id="favFoods"
            value={animal.favFoods.join(", ")}
            onChangeHandler={changeAnimal}
            placeholder="Favourite foods..."
            labelText={`Please enter a comma separated list of the ${animalType}'s favourite foods`}
          />
        </div>
        <div>
          <InputNumber
            id="animalBirthYear"
            value={animalBirthYear}
            onChangeHandler={(event) =>
              setAnimalBirthYear(event.target.valueAsNumber)
            }
            min={1990}
            max={defaultAnimal.birthYear}
            placeholder="Birth year..."
            labelText={`Please enter the ${animalType}'s year of birth`}
          />
        </div>
        <div>
          <Button label="Submit" onClickHandler={addAnimal} />
        </div>
      </div>
    </form>
  );
};

export default AnimalForm;
