import TaskModel from "../model/TaskModel";
import TaskApiService from "./api/TaskApiService";
import Service from "./Service";

export default class TaskService extends Service<TaskModel> {
  private selected?: TaskModel;

  constructor(list?: TaskModel[], selected?: TaskModel) {
    super(new TaskApiService(), list);
    this.selected = selected;
  }

  clone(): TaskService {
    return new TaskService(this.list, this.selected);
  }

  removeById(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
  }

  isSelected(task: TaskModel): boolean {
    return this.getSelected() === task;
  }

  getSelected(): TaskModel | undefined {
    return this.selected;
  }

  setSelected(id: number): void {
    this.selected = this.getById(id);
  }

  setSuccessful(id: number): void {
    const itemUpdated: TaskModel | undefined = this.getById(id);
    if (itemUpdated) {
      itemUpdated.successful = !itemUpdated.successful;
      this.saveItem(itemUpdated);
    }
  }

  getByPriority(): TaskModel | void {
    if (this.list.length === 0) return;
    const idx = this.list.findIndex(
      (item) =>
        item.priorityLevel ===
        Math.max.apply(
          Math,
          this.list.map((item) => item.priorityLevel)
        )
    );
    return this.list[idx];
  }

  updateSuccessful(list: TaskModel[], id: number): void {
    list.find((item) => item.id === id);
  }

  patchMinutesWorking(
    list: TaskModel[],
    id: number,
    workedTimeMinutes: number
  ): TaskModel[] {
    const idx = list.findIndex((item) => item.id === id);
    if (!idx) throw new Error("Task does not exits");
    list[idx].workedTimeMinutes += workedTimeMinutes;
    return list;
  }
}
