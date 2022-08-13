import Form from "./abs-form";

export default interface ErrorForm extends Form {
  error: Error;
  msg: string;
}
