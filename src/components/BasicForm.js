import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const nameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredName("");
    setNameIsTouched(false);
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameIsInvalid && <p className="error-text">Enter name!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
