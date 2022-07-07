import { ChangeEvent, useState } from "react";

export type useInputReturn = {
  value: string;
  hasError: boolean;
  isValid: boolean;
  handlerValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlerValueBlur: () => void;
};

export default function useInput(validateValue: (value: string) => boolean) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid: boolean = validateValue(enteredValue);
  const hasError: boolean = !isValid && isTouched;

  const handlerValueChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setEnteredValue(event.target.value);
  const handlerValueBlur = (): void => setIsTouched(true);

  return {
    value: enteredValue,
    hasError,
    isValid,
    handlerValueChange,
    handlerValueBlur,
  };
}
