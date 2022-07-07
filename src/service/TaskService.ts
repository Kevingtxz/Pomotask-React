import TaskModel from "../model/task-model";
import TaskForm from "../model/form/task-form";

export default class TaskService {
  static get(id: number): TaskModel {
    throw new Error("Not yet implemented");
  }
  static getAll(): TaskModel[] {
    throw new Error("Not yet implemented");
  }
  static post(obj: TaskForm): number {
    throw new Error("Not yet implemented");
  }
  static put(obj: TaskModel): void {
    throw new Error("Not yet implemented");
  }
  static patch(id: number, atr: string, payload: unknown): void {
    throw new Error("Not yet implemented");
  }
  static delete(id: number): void {
    throw new Error("Not yet implemented");
  }
}
