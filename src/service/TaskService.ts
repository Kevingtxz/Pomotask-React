import TaskModel from "../model/task-model";
import TaskForm from "../model/form/task-form";
import { DAY_MILLISECONDS } from "../util/constant";

export default class TaskService {
  static makeForm({
    title,
    expectedTimeHours,
    deadline,
    needFocus,
    isCrucial,
  }: {
    title: string;
    expectedTimeHours: number;
    deadline: number;
    needFocus: boolean;
    isCrucial: boolean;
  }): TaskForm {
    const newForm: TaskForm = {
      title,
      expectedTimeHrs: expectedTimeHours,
      needFocus,
      isCrucial,
      deadline,
      createdAt: Date.now(),
    };
    return newForm;
  }

  static makeTaskModel(id: number, form: TaskForm): TaskModel {
    const newObj: TaskModel = {
      id,
      title: form.title,
      createdAt: form.createdAt,
      needFocus: form.needFocus,
      isCrucial: form.isCrucial,
      deadline: form.deadline,
      expectedTimeHrs: form.expectedTimeHrs,
      workedTimeMin: 0,
      successful: false,
    };
    return newObj;
  }

  static makeSortedTaskList = (listTask: TaskModel[]): TaskModel[] => {
    return listTask.sort((a, b) => {
      if (a.isCrucial === true && b.isCrucial === false) return -1;
      else if (b.isCrucial === true && a.isCrucial === false) return 1;
      const aAvgTimeToFinish = TaskService.findAvgTimeToFinish(
        a.expectedTimeHrs,
        a.workedTimeMin,
        a.deadline
      );
      const bAvgTimeToFinish = TaskService.findAvgTimeToFinish(
        b.expectedTimeHrs,
        b.workedTimeMin,
        b.deadline
      );
      if (aAvgTimeToFinish > bAvgTimeToFinish) return -1;
      else if (bAvgTimeToFinish > aAvgTimeToFinish) return 1;
      else return 0;
    });
  };

  static findDaysLasting(deadline: number): number {
    return Math.floor(
      (deadline - Date.now() + DAY_MILLISECONDS) / DAY_MILLISECONDS
    );
  }

  static findAvgTimeToFinish(
    expectedTimeHrs: number,
    workedTimerHours: number,
    deadline: number
  ): number {
    return (
      (expectedTimeHrs - workedTimerHours) /
      TaskService.findDaysLasting(deadline)
    );
  }

  static fromLocalStorage(): TaskModel[] {
    return JSON.parse(localStorage.getItem("taskList") || "[]");
  }

  static saveOnLocalStorage(taskList: TaskModel[]): void {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }
}
