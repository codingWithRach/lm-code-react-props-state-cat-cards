import React, { useContext, useState } from "react";

export interface IErrorMessageContext {
  nameError: string;
  speciesError: string;
}

const defaultError = {
  nameError: "",
  speciesError: "",
};

const ErrorMessageContext =
  React.createContext<IErrorMessageContext>(defaultError);

const defaultFunction = (errorMessages: IErrorMessageContext) => {};
const ErrorMessageUpdateContext =
  React.createContext<(errorMessages: IErrorMessageContext) => void>(
    defaultFunction
  );

export function useErrorMessage(): IErrorMessageContext {
  return useContext(ErrorMessageContext);
}

export function useErrorMessageUpdate(): typeof defaultFunction {
  return useContext(ErrorMessageUpdateContext);
}

const ErrorMessageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [errorMessages, setErrorMessages] =
    useState<IErrorMessageContext>(defaultError);

  function updateErrorMessages(message: IErrorMessageContext) {
    setErrorMessages({
      nameError: message.nameError,
      speciesError: message.speciesError,
    });
  }

  return (
    <ErrorMessageContext.Provider value={errorMessages}>
      <ErrorMessageUpdateContext.Provider value={updateErrorMessages}>
        {children}
      </ErrorMessageUpdateContext.Provider>
    </ErrorMessageContext.Provider>
  );
};

export default ErrorMessageProvider;
