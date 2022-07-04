import BigTimerModel from "../model/BigTimerModel";
import TimerSettingsModel from "../model/TimerSettingsModel";
import TimerModel from "../model/TimerModel";
import TimerApiService from "./api/TimerApiService";
import Service from "./Service";
import TaskModel from "../model/TaskModel";

export default class TimerService extends Service<TimerModel> {
  private big: BigTimerModel;
  private currentTimeBig: number;
  private currentTime: number;
  private settings: TimerSettingsModel;
  private active: boolean;
  private paused: boolean;
  private selectedTask?: TaskModel;

  constructor(
    list?: TimerModel[],
    currentTime?: number,
    big?: BigTimerModel,
    currentTimeBig?: number,
    isActive?: boolean,
    isPaused?: boolean,
    selectedTask?: TaskModel
  ) {
    super(new TimerApiService(), list);
    this.settings = { bigTimeSeconds: 2, timeSeconds: 2, goalTimers: 3 };
    this.currentTime = currentTime ? currentTime : this.settings.timeSeconds;
    this.currentTimeBig =
      currentTimeBig !== undefined
        ? currentTimeBig
        : this.settings.bigTimeSeconds;
    this.big = big ? big : this.createBigTimer();
    this.active = isActive ? true : false;
    this.paused = isPaused ? true : false;
    this.selectedTask = selectedTask;
  }

  clone(): TimerService {
    return new TimerService(
      this.getAll(),
      this.getCurrentTime(),
      this.getBig(),
      this.getCurrentTimeBig(),
      this.isActive(),
      this.isPaused(),
      this.getSelectedTask()
    );
  }

  timerEffect(): void {
    this.currentTime--;
    if (this.currentTime === 0) {
      this.paused = true;
      this.active = false;
      this.selectedTask = undefined;
      const last: TimerModel | undefined = this.getLast();
      if (last) {
        last.finishedAt = Date.now();
        last.successful = true;
        this.saveItem(last);
      }
    }
  }

  bigTimerEffect(): void {
    this.currentTimeBig--;
    if (this.currentTimeBig === 0) {
      this.active = false;
      this.big.successful = this.list.length >= this.big.goalTimers;
    }
  }

  start(): void {
    this.active = true;
    this.paused = false;
    const timer: TimerModel = {
      createdAt: Date.now(),
      bigTimeId: this.big?.id,
      taskId: this.selectedTask?.id,
      timeMinutes: this.settings.timeSeconds,
      stopsCounter: 0,
      successful: false,
    };
    this.list.push(timer);
  }

  pause(): void {
    this.paused = !this.paused;
  }

  isStarted(): boolean {
    return this.list.length !== 0;
  }

  getCurrentTimeBig(): number {
    return this.currentTimeBig;
  }

  getCurrentTime(): number {
    return this.currentTime;
  }

  getSelectedTask(): TaskModel | undefined {
    return this.selectedTask;
  }

  setSelectedTask(task: TaskModel): void {
    this.selectedTask = task;
  }

  getSettings(): TimerSettingsModel {
    return this.settings;
  }

  getCounter(): number {
    return this.list.length;
  }

  getBig(): BigTimerModel | undefined {
    return this.big;
  }

  saveItem(obj: TimerModel): void {
    obj.timeMinutes = this.settings.timeSeconds;
    obj.bigTimeId = this.getBig()?.id;
    obj.taskId = this.selectedTask?.id;
    obj.createdAt = Date.now();
    obj.stopsCounter = 0;

    this.list.push(obj);
  }

  isActive(): boolean | undefined {
    return this.active;
  }

  isPaused(): boolean | undefined {
    return this.paused;
  }

  private createBigTimer(): BigTimerModel {
    const big = {
      createdAt: Date.now(),
      goalTimers: this.settings.goalTimers,
    } as BigTimerModel;
    // big.id =
    return big;
  }
}
