import { useState, useRef } from "react";
// 2 approaches of showing the submitted form values: 1. with state 2. with ref
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName); // with state

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue); // with ref

    nameInputRef.current.value = ""; // => not ideal, DO NOT MANIPULATE DOM ELEMENT
   // setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
