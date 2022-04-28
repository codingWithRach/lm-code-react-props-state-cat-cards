interface LabelProps {
  forID: string;
  labelText: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ forID, labelText, className }) => {
  const labelClass = className ? className : "form__text";
  return (
    <label className={labelClass} htmlFor={forID}>
      {labelText}
    </label>
  );
};

export default Label;
