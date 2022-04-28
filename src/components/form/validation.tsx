import Animal from "../../data/animal";
import { IErrorMessageContext } from "../../context_providers/ErrorMessageContext";

export const validForm = (
  animal: Animal,
  updateErrorMessages: (errorMessages: IErrorMessageContext) => void
): boolean => {
  const errorMessages: IErrorMessageContext = {
    nameError: validField(animal.name, "Name"),
    speciesError: validField(animal.species, "Species"),
  };
  updateErrorMessages(errorMessages);
  return allFieldsValid(errorMessages);
};

const allFieldsValid = (errorMessages: IErrorMessageContext): boolean => {
  return (
    Object.values(errorMessages).filter((message) => message.length > 0)
      .length === 0
  );
};

const validField = (fieldValue: string, fieldName: string): string => {
  let errorMessage = "";
  if (fieldValue.length === 0) {
    errorMessage = `${fieldName} must be entered`;
  }
  return errorMessage;
};
