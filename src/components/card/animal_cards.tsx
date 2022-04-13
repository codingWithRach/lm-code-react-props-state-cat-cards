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
        return (
          <AnimalCard {...{ ...animal, imageIndex: index }} key={animal.id} />
        );
      })}
    </div>
  );
};

export default AnimalCards;
