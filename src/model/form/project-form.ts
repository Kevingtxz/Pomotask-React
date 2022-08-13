import AbsModel from "./abs-form";
import TaskForm from "./task-form";

export default interface ProjectModel extends AbsModel {
  title: string;
  isCrucial: boolean;
  deadline: number;
  successful: boolean;
  taskList: TaskForm[];
}
