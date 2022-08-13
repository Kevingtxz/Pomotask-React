import { DAY_MILLISECONDS } from "../util/constant";

export default class LoadService {
  static isLoadOlderThan24h(): boolean {
    const lastLoad: number = parseInt(
      JSON.parse(
        localStorage.getItem("lastLoad") ||
          new Date(DAY_MILLISECONDS * 2).toString()
      )
    );
    return (Date.now() - lastLoad) / DAY_MILLISECONDS > 1;
  }
  static setLoadedNow(): void {
    localStorage.setItem("lastLoad", Date.now().toString());
  }
}
