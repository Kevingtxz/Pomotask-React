import "./TaskPage.css";
import TaskList from "../TaskList/TaskList";
import TaskService from "../../../service/TaskService";

export default function TaskPage(props) {
  const taskList = TaskService.getTaskList();
  const updateSuccessfulTask = (id) => TaskService.updateSuccessfulTask(id);
  const deleteTask = (id) => TaskService.deleteTask(id);

  return (
    <div className="task-page">
      <TaskList
        taskList={taskList}
        updateSuccessfulTask={updateSuccessfulTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
