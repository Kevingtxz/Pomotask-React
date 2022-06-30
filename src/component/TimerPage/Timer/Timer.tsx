import "./Timer.css";

type TimerProps = { counter?: number; time: number };

export default function Timer({ counter, time }: TimerProps): JSX.Element {
  const counterElement = <span className="counter">{counter}</span>;

  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
      {counter !== undefined && counterElement}
    </div>
  );
}
