import { AnimalType } from "../../data/animal_type";
import AnimalImage from "./animal_image";
import images from "../../data/image_data";

interface AnimalCardProps {
  animalType: AnimalType;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  animalIndex: number;
}

const Card: React.FC<AnimalCardProps> = ({
  animalType,
  name,
  species,
  favFoods,
  birthYear,
  animalIndex,
}) => {
  const className = `card card--${animalType.toLowerCase()}`;
  return (
    <div className={className}>
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>

      {animalIndex < images.length && <AnimalImage {...images[animalIndex]} />}
    </div>
  );
};

export default Card;
