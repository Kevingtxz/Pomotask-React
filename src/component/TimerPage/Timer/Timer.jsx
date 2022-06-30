import "./Timer.css";

export default function Timer(props) {
  const counter = <span className="counter">{props.counter}</span>;

  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
      {props.counter !== undefined && counter}
    </div>
  );
}
