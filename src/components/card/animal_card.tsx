import { AnimalType } from "../../data/animal_type";
import AnimalImage from "./animal_image";
import images from "../../data/image_data";

interface AnimalCardProps {
  animalType: AnimalType;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  imageIndex: number;
}

const Card: React.FC<AnimalCardProps> = ({
  animalType,
  name,
  species,
  favFoods,
  birthYear,
  imageIndex,
}) => {
  const cardStyle = `card card--${animalType.toLowerCase()}`;
  return (
    <div className={cardStyle}>
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>

      {imageIndex < images.length && <AnimalImage {...images[imageIndex]} />}
    </div>
  );
};

export default Card;
