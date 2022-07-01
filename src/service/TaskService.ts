import axios from "axios";
import TaskModel from "../model/TaskModel";
import { MILIS_TO_DAYS_MULTIPLIER } from "../utils/constants";

const TASK_LIST = [
  {
    id: 1,
    title: "Jogar Vôlei",
    priorityLevel: 1,
    healthLevel: 2,
    expectedTimeHours: 120,
    needFocus: false,
    deadline: new Date(0 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 120,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 2,
    title: "Inglês",
    priorityLevel: 2,
    healthLevel: 1,
    expectedTimeHours: 150,
    needFocus: false,
    deadline: new Date(1 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 240,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 3,
    title: "Ouvir Música",
    priorityLevel: 4,
    healthLevel: 3,
    expectedTimeHours: 60,
    workedTimeMinutes: 500,
    needFocus: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 4,
    title: "Jogar Futebol",
    priorityLevel: 1,
    healthLevel: 3,
    expectedTimeHours: 60,
    workedTimeMinutes: 426,
    needFocus: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 5,
    title: "Nadar",
    priorityLevel: 7,
    healthLevel: 3,
    expectedTimeHours: 60,
    needFocus: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 47747,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 6,
    title: "Programar",
    priorityLevel: 9,
    healthLevel: 3,
    expectedTimeHours: 60,
    needFocus: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 246642,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 7,
    title: "Adorar capivaras",
    priorityLevel: 1,
    healthLevel: 3,
    expectedTimeHours: 60,
    needFocus: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 42142,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 8,
    title: "Animes",
    priorityLevel: 1,
    healthLevel: 3,
    expectedTimeHours: 60,
    needFocus: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 444,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 9,
    title: "Pudim",
    priorityLevel: 1,
    healthLevel: 1,
    expectedTimeHours: 60,
    needFocus: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTimeMinutes: 4244,
    createdAt: new Date(),
    successful: false,
  },
] as TaskModel[];

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
