import { useEffect, useState } from "react";

import AnimalForm from "../form/animal_form";
import AnimalCards from "../card/animal_cards";

import Animal from "../../data/animal";
import catData from "../../data/cat_data";
import dogData from "../../data/dog-data";
import ErrorMessageProvider from "../../context_providers/ErrorMessageContext";

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

  useEffect(() => {
    setCatCount(cats.length);
    setDogCount(dogs.length);
  });

  return (
    <>
      <main>
        <AnimalCards cats={cats} dogs={dogs} />
        <ErrorMessageProvider>
          <AnimalForm
            cats={cats}
            catCount={catCount}
            setCats={setCats}
            dogs={dogs}
            dogCount={dogCount}
            setDogs={setDogs}
          />
        </ErrorMessageProvider>
      </main>
    </>
  );
};

export default AnimalMain;
