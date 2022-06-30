import "./ControlButtons.css";

type ControlButtonsProps = {
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
  isPaused: boolean;
  isActive: boolean;
};

export default function ControlButtons({
  handleStart,
  handlePauseResume,
  handleReset,
  isPaused,
  isActive,
}: ControlButtonsProps): JSX.Element {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
      <div className="btn btn-two" onClick={handleReset}>
        Reset
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{isActive ? ActiveButtons : StartButton}</div>
    </div>
  );
}
