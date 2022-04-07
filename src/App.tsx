import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import AnimalCard from "./components/animal_card";
import Animal from "./data/animal";
import catData from "./data/cat_data";
import dogData from "./data/dog-data";
import InputText from "./components/input_text";
import InputNumber from "./components/input_number";
import Button from "./components/button";
import { v4 as uuidv4 } from "uuid";

function App() {
  const currentYear: number = new Date().getFullYear();
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);
  const [animalName, setAnimalName] = useState<string>("");
  const [animalSpecies, setAnimalSpecies] = useState<string>("");
  const [animalFavFoods, setAnimalFavFoods] = useState<string>("");
  const [animalBirthYear, setAnimalBirthYear] = useState<number>(currentYear);

  let catCount = cats.length;
  const dogCount = dogs.length;

  const addCat = (event: SubmitEvent) => {
    const cat: Animal = {
      name: animalName,
      species: animalSpecies,
      favFoods: animalFavFoods.split(", "),
      birthYear: animalBirthYear,
      id: uuidv4(),
    };
    event.preventDefault();
    setCats([...cats, cat]);
    catCount = cats.length;

    setAnimalName("");
    setAnimalSpecies("");
    setAnimalFavFoods("");
    setAnimalBirthYear(currentYear);
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {[...cats, ...dogs].map((animal, index) => (
            <AnimalCard
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
          <div className="form">
            <h2 className="header__title">Enter details of another cat:</h2>
            <InputText
              value={animalName}
              onChange={setAnimalName}
              placeholder="Name..."
              labelText="Please enter the name of the cat"
              idText="name"
            />
            <br />
            <InputText
              value={animalSpecies}
              onChange={setAnimalSpecies}
              placeholder="Species..."
              labelText="Please enter the cat species"
              idText="species"
            />
            <br />
            <InputText
              value={animalFavFoods}
              onChange={setAnimalFavFoods}
              placeholder="Favourite foods..."
              labelText="Please enter a comma separated list of the cat's favourite foods"
              idText="fav_foods"
            />
            <br />
            <InputNumber
              value={animalBirthYear}
              onChange={setAnimalBirthYear}
              min="1990"
              max={currentYear.toString()}
              placeholder="Birth year..."
              labelText="Please enter the cat's year of birth"
              idText="birth_year"
            />
            <br />
            <Button label="Submit" clickFunction={addCat} />
            <br />
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default App;
