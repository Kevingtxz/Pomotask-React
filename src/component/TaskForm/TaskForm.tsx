import style from "./TaskForm.module.css";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../model/form/task-form";
import { DAYS_MILLISECONDS } from "../../util/constants";
import useInput, { useInputReturn } from "../../hook/use-input";
import { isValidLength as isValidBetween1and30 } from "../../util/validations";
import TaskService from "../../service/TaskService";

type TaskFormProps = {
  id?: number;
};

export default function Task({ id }: TaskFormProps): JSX.Element {
  // if (id) {}

  const navigate = useNavigate();
  const title: useInputReturn = useInput(isValidBetween1and30);
  const expectedTimeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isValidExpectedTime, setIsValidExpectedTime] = useState(true);
  const deadlineRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isValidDeadline, setIsValidDeadline] = useState(true);
  const [needFocus, setNeedFocus] = useState(false);
  const [isCrucial, setIsCrucial] = useState(false);

  const handleNeedFocus = () => setNeedFocus(!needFocus);
  const handleIsCrucial = () => setIsCrucial(!isCrucial);

  const handlerSubmit = (event: FormEvent): void => {
    event.preventDefault();

    title.handlerValueBlur();
    setIsValidExpectedTime(
      parseInt(expectedTimeRef.current.value) >= 1 &&
        parseInt(expectedTimeRef.current.value) <= 1000
    );
    setIsValidDeadline(
      new Date(deadlineRef.current.value).getTime() > Date.now() &&
        new Date(deadlineRef.current.value).getTime() <
          new Date(Date.now() + 3 * 365 * DAYS_MILLISECONDS).getTime()
    );

    if (
      title.isValid &&
      parseInt(expectedTimeRef.current.value) >= 1 &&
      parseInt(expectedTimeRef.current.value) <= 1000 &&
      new Date(deadlineRef.current.value).getTime() > Date.now() &&
      new Date(deadlineRef.current.value).getTime() <
        new Date(Date.now() + 3 * 365 * DAYS_MILLISECONDS).getTime()
    ) {
      const obj: TaskForm = {
        title: title.value,
        expectedTimeHours: parseInt(expectedTimeRef.current.value),
        deadline: new Date(deadlineRef.current.value).getTime(),
        needFocus,
        isCrucial,
      } as TaskForm;
      TaskService.post(obj);
      navigate("/tasks");
    }
  };

  return (
    <div className={style["form"]}>
      <div className={`${style["control"]} ${style["flex-d-col"]}`}>
        <div className={style["validation-box"]}>
          <label htmlFor="title" className={style["label"]}>
            Title
          </label>
          {title.hasError && (
            <p className={style["validation"]}>
              Please send a valid title (min=1, max=30)
            </p>
          )}
          <div className={style["flex-row"]}></div>
        </div>
        <input
          className={`${style["input"]} ${
            title.hasError ? style["error"] : ""
          }`}
          type="text"
          id="title"
          placeholder="Read a book"
          onBlur={title.handlerValueBlur}
          onChange={title.handlerValueChange}
        />
      </div>
      <div className={`${style["control"]} ${style["flex-d-col"]}`}>
        <div className={style["validation-box"]}>
          <label htmlFor="expected-time" className={style["label"]}>
            Expected Time
          </label>
          {!isValidExpectedTime && (
            <p className={style["validation"]}>
              Please send a valid time (min=1, max=1000)
            </p>
          )}
        </div>
        <input
          ref={expectedTimeRef}
          className={`${style["input"]} ${
            !isValidExpectedTime ? style["error"] : ""
          }`}
          type="number"
          max="1000"
          min="1"
          id="expected-time"
          placeholder="230h expected"
        />
      </div>
      <div className={style["control"]}>
        <label htmlFor="deadline" className={style["label"]}>
          Deadline
        </label>
        <input
          ref={deadlineRef}
          className={`${style["input"]} ${
            !isValidDeadline ? style["error"] : ""
          }`}
          type="date"
          id="deadline"
          min={new Date(Date.now() + DAYS_MILLISECONDS)
            .toISOString()
            .slice(0, 10)}
          max={new Date(Date.now() + 3 * 365 * DAYS_MILLISECONDS)
            .toISOString()
            .slice(0, 10)}
        />
      </div>
      <div className={`${style["control"]} ${style["checkbox"]}`}>
        <label htmlFor="focus" className={style["label"]}>
          Need focus?
        </label>
        <input
          checked={needFocus}
          onChange={handleNeedFocus}
          className={`${style["input"]}`}
          type="checkbox"
          id="focus"
        />
      </div>
      <div className={`${style["control"]}`}>
        <label htmlFor="crucial" className={style["label"]}>
          Is crucial?
        </label>
        <input
          checked={isCrucial}
          onChange={handleIsCrucial}
          className={`${style["input"]}`}
          type="checkbox"
          id="crucial"
        />
      </div>
      <button onClick={handlerSubmit} className={style["btn"]} type="submit">
        SEND
      </button>
    </div>
  );
}
