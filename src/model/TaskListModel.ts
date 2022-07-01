import TaskModel from "./TaskModel";

export default interface TaskListModel {
  items: TaskModel[];
  addItem?: (task: TaskModel) => TaskModel;
  removeItem?: (id: number) => {};
  sortItems?: () => {};
}
