import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import AnimalCard from "./components/animal_card";
import Cat from "./data/cat";
import catData from "./data/cat_data";
import Dog from "./data/dog";
import dogData from "./data/dog-data";

function App() {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const catCount = cats.length;
  const dogCount = dogs.length;

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
      </main>

      <Footer />
    </>
  );
}

export default App;
