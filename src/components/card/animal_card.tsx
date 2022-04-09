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

      {
        // only render an image if there's a corresponding entry in our images array
        animalIndex < images.length && (
          <AnimalImage
            image={images[animalIndex].image}
            altText={images[animalIndex].altText}
            licenceType={images[animalIndex].licenceType}
            licenceUrl={images[animalIndex].licenceUrl}
            attributionName={images[animalIndex].attributionName}
            attributionUrl={images[animalIndex].attributionUrl}
          />
        )
      }
    </div>
  );
};

export default Card;
