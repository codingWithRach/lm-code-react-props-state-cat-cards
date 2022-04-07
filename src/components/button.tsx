interface ButtonProps {
  label: string;
  clickFunction: Function;
}

const Button: React.FC<ButtonProps> = ({ label, clickFunction }) => (
  <>
    <button onClick={(event) => clickFunction(event)} className="form__button">
      {label}
    </button>
  </>
);

export default Button;
