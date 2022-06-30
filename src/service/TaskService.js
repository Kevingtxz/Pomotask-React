import axios from "axios";
import { MILIS_TO_DAYS_MULTIPLIER } from "../utils/constants";

const TASKS = [
  {
    id: 1,
    title: "Jogar Vôlei",
    priority: 1,
    health: 2,
    expectedTime: 120,
    isHard: false,
    deadline: new Date(0 * 24 * 60 * 60 * 1000),
    workedTime: 0,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 2,
    title: "Inglês",
    priority: 2,
    health: 1,
    expectedTime: 150,
    isHard: false,
    deadline: new Date(1 * 24 * 60 * 60 * 1000),
    workedTime: 0,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 3,
    title: "Ouvir Música",
    priority: 4,
    health: 3,
    expectedTime: 60,
    isHard: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 4,
    title: "Jogar Futebol",
    priority: 1,
    health: 3,
    expectedTime: 60,
    isHard: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 5,
    title: "Nadar",
    priority: 7,
    health: 3,
    expectedTime: 60,
    isHard: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 6,
    title: "Programar",
    priority: 9,
    health: 3,
    expectedTime: 60,
    isHard: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 7,
    title: "Adorar capivaras",
    priority: 1,
    health: 3,
    expectedTime: 60,
    isHard: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 8,
    title: "Animes",
    priority: 1,
    health: 3,
    expectedTime: 60,
    isHard: false,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
  {
    id: 9,
    title: "Pudim",
    priority: 1,
    health: 1,
    expectedTime: 60,
    isHard: true,
    deadline: new Date(2 * 24 * 60 * 60 * 1000),
    workedTime: 10,
    createdAt: new Date(),
    successful: false,
  },
];

class TaskService {
  constructor() {
    this.taskList = TASKS;
    this.taskList.forEach(
      (item) =>
        (item.deadline = Number.parseInt(
          item.deadline / MILIS_TO_DAYS_MULTIPLIER
        ))
    );
  }

  getPriorityTask() {
    if (this.taskList.length !== 0)
      return this.taskList.find(
        (item) =>
          item.priority ===
          Math.max.apply(
            Math,
            this.taskList.map((item) => item.priority)
          )
      );
  }

  getTaskList() {
    //axios...
    return this.taskList;
  }

  postTask(obj) {
    //axios...
    if (this.taskList.length === 15) return false;
    this.tasks.push(obj);
    return true;
    console.log(this.taskList);
  }

  updateSuccessfulTask(id) {
    this.taskList.find((item) => item.id === id).successful =
      !this.taskList.find((item) => item.id === id).successful;
  }

  deleteTask(id) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
  }
}

export default new TaskService();
