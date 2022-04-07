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
        {value.toLowerCase() === selectedAnimalType.toLowerCase() && (
          <input
            onChange={(event) => onChangeHandler(event)}
            type="radio"
            name="animal"
            value={value}
            id={value}
            checked
          />
        )}
        {value.toLowerCase() !== selectedAnimalType.toLowerCase() && (
          <input
            onChange={(event) => onChangeHandler(event)}
            type="radio"
            name="animal"
            value={value}
            id={value}
          />
        )}
        <label htmlFor={value}>{labels[index]}</label>
      </>
    ))}
    <br />
  </>
);

export default AnimalRadiobuttons;
