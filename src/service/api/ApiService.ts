import Model from "../../model/Model";

export default interface ApiService<T extends Model> {
  urlApi: string;

  get(id: number): T;
  getAll(): T[];
  post(obj: T): number;
  put(id: number, obj: T): boolean;
  patch(id: number, obj: T, propertyName: string): void;
  delete(id: number): boolean;
}
