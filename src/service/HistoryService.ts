import { HistoryState } from "../store/reducer/history-reducer";

export default class HistoryService {
  static fromLocalStorageHistory(): HistoryState {
    return JSON.parse(localStorage.getItem("history") || "{}");
  }

  static saveOnLocalStorageHistory(history: HistoryState): void {
    localStorage.setItem("history", JSON.stringify(history));
  }
}
