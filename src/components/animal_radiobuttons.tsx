import { AnimalType } from "../data/animal_type";
import Radiobutton from "./radiobutton";

interface AnimalRadiobuttonProps {
  selectedAnimalType: AnimalType;
  values: Array<AnimalType>;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const AnimalRadiobuttons: React.FC<AnimalRadiobuttonProps> = ({
  selectedAnimalType,
  values,
  onChangeHandler,
}) => (
  <>
    {values.map((value, index) => (
      <>
        <Radiobutton
          name="animal"
          value={value}
          label={value}
          checked={value.toLowerCase() === selectedAnimalType.toLowerCase()}
          onChangeHandler={onChangeHandler}
        />
      </>
    ))}
    <br />
  </>
);

export default AnimalRadiobuttons;
