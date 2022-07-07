import style from "./Clock.module.css";

export default function Clock(): JSX.Element {
  return (
    <div className={style["clock"]}>
      <div className={`${style["pointer"]}`}></div>
    </div>
  );
}
