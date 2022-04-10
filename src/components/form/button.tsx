interface ButtonProps {
  label: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ label, onClickHandler }) => (
  <>
    <button onClick={(event) => onClickHandler(event)} className="form__button">
      {label}
    </button>
  </>
);

export default Button;
