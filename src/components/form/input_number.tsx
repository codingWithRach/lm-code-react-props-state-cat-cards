import Label from "./label";
interface InputNumberProps {
  value: number;
  onChange: Function;
  min: string;
  max: string;
  placeholder: string;
  labelText: string;
  idText: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  min,
  max,
  placeholder,
  labelText,
  idText,
}) => (
  <>
    <Label placeholder={placeholder} labelText={labelText} />
    <br />
    <input
      className="form__input"
      type="number"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      min={min}
      max={max}
      placeholder={placeholder}
      id={idText}
    />
  </>
);

export default InputNumber;
