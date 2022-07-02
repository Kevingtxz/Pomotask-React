import { ReactNode, useReducer } from "react";
import TaskListContext from "./task-list-context";
import TaskModel from "../../model/TaskModel";
import { ActionsEnum, TaskListContextType } from "../../utils/store-types";
import { ActionTask } from "../../utils/store-types";
import TaskListService from "../../service/TaskListService";

const defaultTaskState: TaskModel[] = TaskListService.getInitialList();

const taskReducer = (
  state: TaskModel[] = defaultTaskState,
  action: ActionTask
): TaskModel[] => {
  if (action.type === ActionsEnum.ADD && action.item) state.push(action.item);
  else if (action.type === ActionsEnum.REMOVE && action.id)
    state = state.filter((item) => item.id !== action.id);
  return state;
};

type TaskProviderProps = { children: ReactNode };

export default function TaskProvider({
  children,
}: TaskProviderProps): JSX.Element {
  const [taskState, dispatchAction] = useReducer(taskReducer, defaultTaskState);

  const dispatchAddItem = (item: TaskModel): void =>
    dispatchAction({ type: ActionsEnum.ADD, item: item } as ActionTask);
  const dispatchRemoveItem = (id: number): void =>
    dispatchAction({ type: ActionsEnum.REMOVE, id: id });

  const taskContext = {
    list: taskState,
    dispatchAddItem: dispatchAddItem,
    dispatchRemoveItem: dispatchRemoveItem,
  } as TaskListContextType;

  return (
    <TaskListContext.Provider value={taskContext}>
      {children}
    </TaskListContext.Provider>
  );
}
