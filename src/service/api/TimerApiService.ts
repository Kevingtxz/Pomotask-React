import TimerModel from "../../model/TimerModel";
import { API_URL } from "../../utils/constants";
import ApiService from "./ApiService";

export default class TimerApiService implements ApiService<TimerModel> {
  urlApi: string = API_URL + "timers/";

  get(id: number): TimerModel {
    throw new Error("Method not implemented.");
  }
  getAll(): TimerModel[] {
    return [];
  }
  post(obj: TimerModel): number {
    throw new Error("Method not implemented.");
  }
  put(id: number, obj: TimerModel): boolean {
    throw new Error("Method not implemented.");
  }
  patch(id: number, obj: TimerModel, propertyName: string): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}
