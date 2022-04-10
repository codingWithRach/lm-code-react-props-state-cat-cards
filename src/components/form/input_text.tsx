import Label from "./label";
interface InputTextProps {
  value: string;
  onChangeHandler: Function;
  placeholder: string;
  labelText: string;
  idText: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChangeHandler,
  placeholder,
  labelText,
  idText,
}) => (
  <>
    <Label placeholder={placeholder} labelText={labelText} />
    <br />
    <input
      className="form__input"
      type="text"
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
      placeholder={placeholder}
      id={idText}
    />
  </>
);

export default InputText;
