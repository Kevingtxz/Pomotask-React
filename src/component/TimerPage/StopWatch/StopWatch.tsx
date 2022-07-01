import "./StopWatch.css";
import { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import TimerService from "../../../service/TimerService";

type StopWatchProps = {
  initialTime?: number;
  initialBigTime?: number;
  taskId?: number;
  taskTitle?: string;
};

function StopWatch({
  initialTime = 3600,
  initialBigTime = 16200,
  taskId = 0,
  taskTitle,
}: StopWatchProps): JSX.Element {
  const [isBigActive, setIsBigActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [stopCounter, setStopCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [bigTime, setBigTime] = useState(initialBigTime * 1000);
  const [time, setTime] = useState(initialTime * 1000);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevState) => {
          if (prevState === 0) {
            TimerService.postTimer({
              stopCounter: stopCounter,
              time: initialTime,
              bigTimeId: 1,
              taskId: taskId,
            });

            setStopCounter(0);
            setCounter((prevState) => prevState + 1);
            handleReset();
            clearInterval(interval);
          }
          return prevState - 1000;
        });
      }, 1000);
    } else if (interval) clearInterval(interval);

    if (!isBigActive && isActive) {
      setIsBigActive(true);
      let intervalBig: NodeJS.Timer | undefined;

      intervalBig = setInterval(() => {
        setBigTime((prevState) => {
          if (prevState === 1000) {
            setCounter((prevState) => prevState + 1);
            clearInterval(intervalBig);
          }
          return prevState - 1000;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, isBigActive, stopCounter]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    if (!isPaused) setStopCounter((prevState) => prevState + 1);
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(initialTime * 1000);
  };

  return (
    <div className="stop-watch">
      <Timer time={bigTime} />
      <Timer time={time} counter={counter} />
      <div className="control-btns">
        <ControlButtons
          isActive={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
          taskTitle={taskTitle}
        />
      </div>
    </div>
  );
}

export default StopWatch;