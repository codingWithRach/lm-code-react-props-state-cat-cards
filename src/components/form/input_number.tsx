import Label from "./label";
interface InputNumberProps {
  id: string;
  value: number;
  onChangeHandler: Function;
  min: string;
  max: string;
  placeholder: string;
  labelText: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  id,
  value,
  onChangeHandler,
  min,
  max,
  placeholder,
  labelText,
}) => (
  <>
    <Label forID={id} labelText={labelText} />
    <br />
    <input
      className="form__input"
      type="number"
      id={id}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
      min={min}
      max={max}
      placeholder={placeholder}
    />
  </>
);

export default InputNumber;
