import TaskApiService from "../api/TaskApiService";
import TaskModel from "../model/TaskModel";

type TaskListServiceProps = {
  items?: TaskModel[];
  sortItems?: () => {};
};

export default class TaskListService {
  static getInitialList: () => TaskModel[] = () => TaskApiService.getList();

  private items: TaskModel[];

  constructor({ items, sortItems }: TaskListServiceProps) {
    this.items = items ? items : TaskListService.getInitialList();
    this.sortItems = sortItems;
  }

  getList: () => TaskModel[] = () => this.items;

  addItem: (item: TaskModel) => number = (item: TaskModel) => {
    const id: number = TaskApiService.post(item);
    this.items.push(item);
    return id;
  };

  removeItem: (id: number) => void = (id: number) =>
    (this.items = this.items.filter((item) => item.id !== id));

  sortItems?: () => {};
}
