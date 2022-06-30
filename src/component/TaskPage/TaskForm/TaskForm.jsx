import { useRef } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const titleRef = useRef("");
  const expectedTimeRef = useRef("");
  const deadlineDateRef = useRef("");
  const difficultRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    // props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className="form-control">
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default TaskForm;
