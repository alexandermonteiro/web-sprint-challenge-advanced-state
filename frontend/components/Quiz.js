import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";
export function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handleSubmit = () => {
    props.postAnswer(props.selectedAnswer, props.quiz.state.quiz_id);
  };

  const selectAnswer = (index) => {
    props.selectAnswer(props.quiz.state.answers[index].answer_id);
  };
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz.state ? (
          <>
            <h2>{props.quiz.state.question}</h2>

            <div id="quizAnswers">
              <div
                className={
                  props.selectedAnswer !== props.quiz.state.answers[0].answer_id
                    ? "answer "
                    : "answer selected"
                } /*selected*/
              >
                {props.quiz.state.answers[0].text}
                <button onClick={() => selectAnswer(0)}>
                  {props.selectedAnswer !==
                  props.quiz.state.answers[0].answer_id
                    ? "Select "
                    : "SELECTED"}
                </button>
              </div>

              <div
                className={
                  props.selectedAnswer !== props.quiz.state.answers[1].answer_id
                    ? "answer "
                    : "answer selected"
                }
              >
                {props.quiz.state.answers[1].text}
                <button onClick={() => selectAnswer(1)}>
                  {props.selectedAnswer !==
                  props.quiz.state.answers[1].answer_id
                    ? "Select "
                    : "SELECTED"}
                </button>
              </div>
            </div>

            <button
              disabled={!props.selectedAnswer ? true : false}
              onClick={handleSubmit}
              id="submitAnswerBtn"
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
export default connect((st) => st, actions)(Quiz);
