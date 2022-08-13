import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HistoryService from "../../service/HistoryService";
import LoadService from "../../service/LoadService";
import TaskService from "../../service/TaskService";
import { historyAction } from "../../store/reducer/history-reducer";
import { taskAction } from "../../store/reducer/task-reducer";
import { TASK_LIST } from "../../util/DUMMY";
import useHttp from "./use-http";

export default function useLoad() {
  const dispatch = useDispatch();
  const [isLoading, error, sendRequest] = useHttp();
  console.log(isLoading, error);

  useEffect(() => {
    sendRequest({
      url: "me",
      dataHandler: (data: unknown) => console.log(data),
    });

    if (LoadService.isLoadOlderThan24h()) {
      dispatch(taskAction.loadTask(TASK_LIST));
      // dispatch(taskAction.loadTask());
      LoadService.setLoadedNow();
    } else {
      dispatch(taskAction.loadTask(TaskService.fromLocalStorage()));
      dispatch(
        historyAction.loadHistory(HistoryService.fromLocalStorageHistory())
      );
    }
  }, [dispatch, sendRequest]);
}
