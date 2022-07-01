// import axios from "axios";
import TaskModel from "../model/TaskModel";
import { MILIS_TO_DAYS_MULTIPLIER } from "../utils/constants";
import { TASK_LIST } from "../utils/DUMMY";

class TaskService {
  taskList: TaskModel[];

  constructor() {
    this.taskList = TASK_LIST;
    this.taskList.map((item) => {
      if (item.deadline instanceof Date)
        item.deadline = Math.floor(
          item.deadline.getTime() / MILIS_TO_DAYS_MULTIPLIER
        );
      return item;
    });
  }

  getPriorityLevelTask(): TaskModel | void {
    const task: TaskModel | undefined = this.taskList.find(
      (item) =>
        item.priorityLevel ===
        Math.max.apply(
          Math,
          this.taskList.map((item) => item.priorityLevel)
        )
    );
    if (task) return task;
  }

  getTaskList(): TaskModel[] {
    //axios...
    return this.taskList;
  }

  getTaskListQtd(qtd: number): TaskModel[] {
    //axios...
    return this.taskList.slice(0, qtd);
  }

  postTask(obj: TaskModel): number {
    //axios...
    if (this.taskList.length === 18) return 0;
    this.taskList.push(obj);
    return 1;
  }

  updateSuccessfulTask(id: number): void {
    //axios...
    const task = this.taskList.find((item) => item.id === id);
    if (task) task.successful = !task.successful;
  }

  patchMinutesWorkingTask(id: number, workedTimeMinutes: number): void {
    //axios...
    const task = this.taskList.find((item) => item.id === id);
    if (!task) throw new Error("Task does not exits");
    task.workedTimeMinutes += workedTimeMinutes;
  }

  deleteTask(id: number): void {
    //axios...
    this.taskList = this.taskList.filter((item) => item.id !== id);
  }
}

export default new TaskService();
