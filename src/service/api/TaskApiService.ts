import TaskModel from "../../model/TaskModel";
import { API_URL } from "../../util/constants";
import { TASK_LIST } from "../../util/DUMMY";
import ApiService from "./ApiService";

export default class TaskApiService implements ApiService<TaskModel> {
  urlApi: string = API_URL + "tasks/";

  get(id: number): TaskModel {
    throw new Error("Method not implemented.");
  }
  getAll(): TaskModel[] {
    return TASK_LIST;
  }
  post(obj: TaskModel): number {
    throw new Error("Method not implemented.");
  }
  put(id: number, obj: TaskModel): boolean {
    throw new Error("Method not implemented.");
  }
  patch(id: number, obj: TaskModel, propertyName: string): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}
