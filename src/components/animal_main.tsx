import React, { useState } from "react";

import AnimalForm from "./animal_form";
import AnimalCard from "./animal_card";

import { AnimalType } from "../data/animal_type";
import Animal from "../data/animal";
import catData from "../data/cat_data";
import dogData from "../data/dog-data";

interface AnimalMainProps {
  catCount: number;
  dogCount: number;
  setCatCount(catCount: number): void;
  setDogCount(dogCount: number): void;
}

const AnimalMain: React.FC<AnimalMainProps> = ({
  catCount,
  setCatCount,
  dogCount,
  setDogCount,
}) => {
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);
  const [selectedAnimalType, setSelectedAnimalType] =
    useState<AnimalType>("Cat");

  setCatCount(cats.length);
  setDogCount(dogs.length);

  return (
    <>
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
        <AnimalForm
          selectedAnimalType={selectedAnimalType}
          setSelectedAnimalType={setSelectedAnimalType}
          cats={cats}
          catCount={catCount}
          setCats={setCats}
          dogs={dogs}
          dogCount={dogCount}
          setDogs={setDogs}
        />
      </main>
    </>
  );
};

export default AnimalMain;
