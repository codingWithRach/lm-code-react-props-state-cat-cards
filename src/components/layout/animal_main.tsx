import { useEffect, useState } from "react";

import AnimalForm from "../form/animal_form";
import AnimalCards from "../card/animal_cards";

import Animal from "../../data/animal";
import catData from "../../data/cat_data";
import dogData from "../../data/dog-data";

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
        <AnimalForm
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
