import Label from "./label";
interface InputTextProps {
  id: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
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
    <input
      className="form__input"
      type="text"
      name={id}
      id={id}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  </>
);

export default InputText;
