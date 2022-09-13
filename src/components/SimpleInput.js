import { useState, useRef } from "react";
// 2 approaches of showing the submitted form values: 1. with state 2. with ref
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      // trim() to delete excess spaces
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName); // with state

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue); // with ref

    // nameInputRef.current.value = ""; // => not ideal, DO NOT MANIPULATE DOM ELEMENT
    setEnteredName(""); // OVERALL STATE IS BETTER BECAUSE YOU CAN RESET THE FORM AFTER SUBMISSION WITHOUT DOM MANIPULATION
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
