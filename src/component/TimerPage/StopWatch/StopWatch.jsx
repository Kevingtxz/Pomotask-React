import "./StopWatch.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch(props) {
  const [isBigActive, setIsBigActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [stopCounter, setStopCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [bigTime, setBigTime] = useState(props.bigTime * 1000);
  const [time, setTime] = useState(props.time * 1000);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevState) => {
          if (prevState === 0) {
            props.postTimer({
              stopCounter: stopCounter,
              time: props.time,
              bigTimeId: 1,
            });

            setStopCounter(0);
            setCounter((prevState) => prevState + 1);
            handleReset();
            clearInterval(interval);
          }
          return prevState - 1000;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (!isBigActive && isActive) {
      setIsBigActive(true);
      let intervalBig = null;

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
    setTime(props.time * 1000);
  };

  return (
    <div className="stop-watch">
      <Timer time={bigTime} />
      <Timer time={time} counter={counter} />
      <div className="control-btns">
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}
StopWatch.defaultProps = {
  time: 3600,
  bigTime: 16200,
};
StopWatch.propTypes = {
  time: PropTypes.number,
  bigTime: PropTypes.number,
};

export default StopWatch;
