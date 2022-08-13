import style from "./TaskFormPage.module.css";
import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../../model/form/task-form";
import { DAY_MILLISECONDS } from "../../util/constant";
import useInput, { useInputReturn } from "../../hook/form/use-input";
import { taskFormValidation } from "../../util/validation";
import TaskService from "../../service/TaskService";
import { useDispatch } from "react-redux";
import { taskAction } from "../../store/reducer/task-reducer";
import useCheckbox from "../../hook/form/use-checkbox";
import useRefInput from "../../hook/form/use-ref-input";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function TaskFormPage(): JSX.Element {
  const TEMP_id: number = Date.now();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const taskId = params.taskId && parseInt(params.taskId);
  const task = useSelector((state: RootState) =>
    state.taskReducer.taskList.find((item) => item.id === taskId)
  );

  const title: useInputReturn = useInput(taskFormValidation.validateTitle);
  const [expectedTimeRef, isValidExpectedTime, validateExpectedTime] =
    useRefInput(taskFormValidation.validateExpectedTime);
  const [deadlineRef, isValidDeadline, validateDeadline] = useRefInput(
    taskFormValidation.validateDeadline
  );
  const [needFocus, handleNeedFocus] = useCheckbox(
    (task && task.needFocus) || false
  );
  const [isCrucial, handleIsCrucial] = useCheckbox(
    (task && task.isCrucial) || false
  );
  // const [isLoading, error, sendRequest] = useHttp();

  const handlerSubmit = (event: FormEvent): void => {
    event.preventDefault();
    title.handlerValueBlur();

    if (title.isValid && validateExpectedTime() && validateDeadline()) {
      const form: TaskForm = TaskService.makeForm({
        title: title.value,
        expectedTimeHours: parseInt(expectedTimeRef.current.value),
        deadline: new Date(deadlineRef.current.value).getTime(),
        isCrucial,
        needFocus,
      });

      // const addObj = (data: { name: number }) => {
      const obj = TaskService.makeTaskModel(taskId || TEMP_id, form);
      dispatch(taskAction.addTask(obj));
      // };

      // sendRequest({
      //   url: UrlEnum.TASKS,
      //   method: MethodsEnum.POST,
      //   body: form,
      //   dataHandler: addObj,
      // });

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
          min={new Date(Date.now() + DAY_MILLISECONDS)
            .toISOString()
            .slice(0, 10)}
          max={new Date(Date.now() + 3 * 365 * DAY_MILLISECONDS)
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
