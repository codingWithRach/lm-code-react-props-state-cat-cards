interface LabelProps {
  placeholder: string;
  labelText: string;
}

const Label: React.FC<LabelProps> = ({ placeholder, labelText }) => (
  <label className="form__text" htmlFor={placeholder}>
    {labelText}
  </label>
);

export default Label;
