interface InputTextProps {
  value: string;
  onChange: Function;
  placeholder: string;
  labelText: string;
  idText: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  labelText,
  idText,
}) => (
  <>
    <label htmlFor={placeholder}>{labelText}</label>
    <br />
    <input
      className="form__input"
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      id={idText}
    />
  </>
);

export default InputText;
