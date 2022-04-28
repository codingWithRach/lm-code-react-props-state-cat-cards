import { AnimalType } from "../../data/animal_type";
import Label from "../form/label";

interface ErrorMessageProps {
  animalType: AnimalType;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ animalType, message }) => {
  const errorClass = `form__text errorText--${animalType.toLowerCase()}`;
  return (
    <>
      <Label forID="errorMessage" labelText={message} className={errorClass} />
    </>
  );
};

export default ErrorMessage;
