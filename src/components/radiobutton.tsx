interface RadiobuttonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Radiobutton: React.FC<RadiobuttonProps> = ({
  name,
  value,
  label,
  checked,
  onChangeHandler,
}) => (
  <>
    {checked && (
      <input
        onChange={(event) => onChangeHandler(event)}
        type="radio"
        name={name}
        value={value}
        id={value}
        checked
      />
    )}
    {!checked && (
      <input
        onChange={(event) => onChangeHandler(event)}
        type="radio"
        name="animal"
        value={value}
        id={value}
      />
    )}
    <label htmlFor={value}>{label}</label>
  </>
);

export default Radiobutton;
