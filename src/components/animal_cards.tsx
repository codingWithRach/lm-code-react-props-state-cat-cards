import AnimalCard from "./animal_card";
import Animal from "../data/animal";

interface AnimalCardsProps {
  cats: Array<Animal>;
  dogs: Array<Animal>;
}
const AnimalCards: React.FC<AnimalCardsProps> = ({ cats, dogs }) => {
  //
  return (
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
  );
};

export default AnimalCards;
