import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const onChange = (evt) => {
    const { name, value } = evt.target;
    props.inputChange({ name, value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.postQuiz(
      props.form.newQuestion,
      props.form.newTrueAnswer,
      props.form.newFalseAnswer
    );
    props.resetForm();
    props.setMessage(props.form.newQuestion);
  };
  const disabled =
    props.form.newQuestion.trim("").length > 0 &&
    props.form.newTrueAnswer.trim("").length > 0 &&
    props.form.newFalseAnswer.trim("").length > 0;

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        name="newQuestion"
        value={props.form.newQuestion}
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        name="newTrueAnswer"
        value={props.form.newTrueAnswer}
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        name="newFalseAnswer"
        value={props.form.newFalseAnswer}
        placeholder="Enter false answer"
      />
      <button disabled={!disabled} id="submitNewQuizBtn">
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
