import AnimalCard from "./animal_card";
import Animal from "../../data/animal";
import "./card.css";

interface AnimalCardsProps {
  cats: Array<Animal>;
  dogs: Array<Animal>;
}
const AnimalCards: React.FC<AnimalCardsProps> = ({ cats, dogs }) => {
  //
  return (
    <div className="cards__wrapper">
      {[...cats, ...dogs].map((animal, index) => {
        const animalWithIndex = { ...animal, animalIndex: index };
        return <AnimalCard {...animalWithIndex} />;
      })}
    </div>
  );
};

export default AnimalCards;
