import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigTimerForm from "../../model/form/big-timer-form";
import { timerAction } from "../../store/reducer/timer-reducer";
import { RootState } from "../../store/store";

export default function useTimeEffect() {
  const dispatch = useDispatch();
  const isStarted = useSelector(
    (state: RootState) => state.timerReducer.started
  );
  const bigTime = useSelector(
    (state: RootState) => state.timerReducer.currentTimeBig
  );
  const bigTimer: BigTimerForm = useSelector(
    (state: RootState) => state.timerReducer.bigTimer
  );

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isStarted === true && bigTime !== 0)
      interval = setInterval(() => dispatch(timerAction.timeEffect()), 1000);
    else if (bigTime === 0) {
      // ADD TO BIGTIMER TO HISTORY
    }

    return () => clearInterval(interval);
  }, [isStarted, bigTime, dispatch, bigTimer]);
}
