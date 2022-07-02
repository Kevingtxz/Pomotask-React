// import axios from "axios";
import TaskModel from "../model/TaskModel";
import { MILIS_TO_DAYS_MULTIPLIER } from "../utils/constants";
import { TASK_LIST } from "../utils/DUMMY";

class TaskApiService {
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

  getByPriority(): TaskModel | void {
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

  getList(): TaskModel[] {
    //axios...
    return this.taskList;
  }

  getListQtd(qtd: number): TaskModel[] {
    //axios...
    return this.taskList.slice(0, qtd);
  }

  post(obj: TaskModel): number {
    //axios...
    if (this.taskList.length === 18) return 0;
    this.taskList.push(obj);
    return 1;
  }

  updateSuccessful(id: number): void {
    //axios...
    const task = this.taskList.find((item) => item.id === id);
    if (task) task.successful = !task.successful;
  }

  patchMinutesWorking(id: number, workedTimeMinutes: number): void {
    //axios...
    const task = this.taskList.find((item) => item.id === id);
    if (!task) throw new Error("Task does not exits");
    task.workedTimeMinutes += workedTimeMinutes;
  }

  delete(id: number): void {
    //axios...
    this.taskList = this.taskList.filter((item) => item.id !== id);
  }
}

export default new TaskApiService();
