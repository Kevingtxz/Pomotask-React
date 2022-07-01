import "./TaskChooser.css";
import { useState } from "react";
import TaskService from "../../../service/TaskService";
import TaskModel from "../../../model/TaskModel";
import TaskChoiceCard from "../TaskChoiceCard/TaskChoiceCard";

type ChooseTaskProps = {
  qtd?: number;
  setChosenTask: (obj: TaskModel) => void;
};

export default function TaskChooser({
  qtd = 4,
  setChosenTask,
}: ChooseTaskProps): JSX.Element {
  const [taskList, setTaskList] = useState(TaskService.getTaskListQtd(qtd));

  const onChoose = (task: TaskModel) => {
    setTaskList([]);
    setChosenTask(task);
  };

  return (
    <ul className="task-chooser">
      {taskList.map((item) => (
        <li>
          <TaskChoiceCard key={item.id} task={item} onChoose={onChoose} />
        </li>
      ))}
    </ul>
  );
}
