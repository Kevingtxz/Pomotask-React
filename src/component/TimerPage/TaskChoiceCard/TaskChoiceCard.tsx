import { useState } from "react";
import TaskModel from "../../../model/TaskModel";
import "./TaskChoiceCard.css";

type TaskChoiceCardProps = {
  task: TaskModel;
  onChoose: (task: TaskModel) => void;
  onReset: () => void;
};

export default function TaskChoiceCard({
  task,
  onChoose,
  onReset,
}: TaskChoiceCardProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  const handlerChoose = () => {
    setIsSelected(!isSelected);
    onChoose(task);
  };

  return (
    <div className="task-choice-card">
      <h2 className="task-choice-title">{task.title}</h2>
      <button onClick={handlerChoose} className="task-choice-btn">
        <svg
          className="task-choice-check-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  );
}
