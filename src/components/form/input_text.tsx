import Label from "./label";
interface InputTextProps {
  id: string;
  value: string;
  onChangeHandler: Function;
  placeholder: string;
  labelText: string;
}

const InputText: React.FC<InputTextProps> = ({
  id,
  value,
  onChangeHandler,
  placeholder,
  labelText,
}) => (
  <>
    <Label forID={id} labelText={labelText} />
    <br />
    <input
      className="form__input"
      type="text"
      id={id}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
      placeholder={placeholder}
    />
  </>
);

export default InputText;
