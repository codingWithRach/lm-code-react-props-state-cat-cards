import Radiobutton from "./radiobutton";

interface AnimalRadiobuttonProps {
  selectedAnimalType: string;
  values: Array<string>;
  labels: Array<string>;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const AnimalRadiobuttons: React.FC<AnimalRadiobuttonProps> = ({
  selectedAnimalType,
  values,
  labels,
  onChangeHandler,
}) => (
  <>
    {values.map((value, index) => (
      <>
        <Radiobutton
          name="animal"
          value={value}
          label={labels[index]}
          checked={value.toLowerCase() === selectedAnimalType.toLowerCase()}
          onChangeHandler={onChangeHandler}
        />
      </>
    ))}
    <br />
  </>
);

export default AnimalRadiobuttons;
