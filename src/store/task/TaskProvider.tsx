import { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskModel from "../../model/TaskModel";
import { ActionsEnum, TaskContextType } from "../../util/store-types";
import { ActionTask } from "../../util/store-types";
import { defaultTaskState, taskReducer } from "./taskReducer";

type TaskProviderProps = { children: ReactNode };

export default function TaskProvider({
  children,
}: TaskProviderProps): JSX.Element {
  const [state, dispatchAction] = useReducer(taskReducer, defaultTaskState);

  const dispatchAddItem = (item: TaskModel): void =>
    dispatchAction({ opt: ActionsEnum.ADD, item: item } as ActionTask);
  const dispatchRemoveItem = (id: number): void =>
    dispatchAction({ opt: ActionsEnum.REMOVE, id: id } as ActionTask);
  const dispatchSetSuccessful = (id: number): void =>
    dispatchAction({ opt: ActionsEnum.SET_SUCCESSFUL, id: id } as ActionTask);
  const dispatchSetSelected = (id: number): void =>
    dispatchAction({ opt: ActionsEnum.SET_SELECTED, id: id } as ActionTask);

  const ctx = {
    service: state,
    dispatchAddItem: dispatchAddItem,
    dispatchRemoveItem: dispatchRemoveItem,
    dispatchSetSuccessful: dispatchSetSuccessful,
    dispatchSetSelected: dispatchSetSelected,
  } as TaskContextType;

  return <TaskContext.Provider value={ctx}>{children}</TaskContext.Provider>;
}
