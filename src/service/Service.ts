import Model from "../model/Model";
import ApiService from "./api/ApiService";

export default class Service<T extends Model> {
  protected apiService: ApiService<T>;
  protected list: T[];

  constructor(apiService: ApiService<T>, list?: T[]) {
    this.apiService = apiService;
    this.list = list ? list : this.apiService.getAll();
  }

  getById(id: number): T | undefined {
    const idx: number | undefined = this.findIndexById(id);
    if (idx) return this.list[idx];
  }
  saveItem(obj: T): void {
    if (obj.id) {
      const idx: number | undefined = this.findIndexById(obj.id);
      if (idx) {
        this.list[idx] = obj;
        return;
      }
    }
    this.list.push(obj);
  }
  getAllQtd(qtd: number): T[] {
    return this.list.slice(0, qtd);
  }
  getAll(): T[] {
    return this.list;
  }
  post(obj: T): number {
    // const id: number = this.apiService.post(obj);
    return 1;
  }
  put(id: number, obj: T): void {
    // this.apiService.put(id, obj);
  }
  patch(id: number, obj: T, propertyName: string): void {
    // const idx: number = this.findIndexById(id);
  }
  delete(id: number): void {
    this.list = this.list.filter((item) => item.id === id);
  }

  protected getLast(): T | undefined {
    return this.list[this.list.length - 1];
  }

  protected findIndexById(id: number): number | undefined {
    return this.list.findIndex((item) => item.id === id);
  }
}
