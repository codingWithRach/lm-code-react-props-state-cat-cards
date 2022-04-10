import Label from "./label";
interface InputNumberProps {
  id: string;
  value: number;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
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
      onChange={onChangeHandler}
      min={min}
      max={max}
      placeholder={placeholder}
    />
  </>
);

export default InputNumber;
