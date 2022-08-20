// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import * as actions from "./action-types";

const URL = "http://localhost:9000/api/quiz/";

//  wheel
export function moveClockwise(value) {
  return { type: actions.MOVE_CLOCKWISE, payload: value };
}
// wheel
export function moveCounterClockwise(value) {
  return { type: actions.MOVE_COUNTERCLOCKWISE, payload: value };
}
// quizz
export function selectAnswer(answerId) {
  return { type: actions.SET_SELECTED_ANSWER, payload: answerId };
}

// form
export function setMessage(name) {
  return { type: actions.SET_INFO_MESSAGE, payload: name };
}

// quizz
export function setQuiz(data) {
  return { type: actions.SET_QUIZ_INTO_STATE, payload: data };
}

export function inputChange({ name, value }) {
  return {
    type: actions.INPUT_CHANGE,
    payload: { name, value },
  };
}

export function resetForm() {
  return { type: actions.RESET_FORM };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios
      .get(`${URL}next`)
      .then((resp) => {
        // console.log("get resp", resp.data);
        dispatch({ type: actions.SET_QUIZ_INTO_STATE, payload: null });
        dispatch({ type: actions.SET_QUIZ_INTO_STATE, payload: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer(answer_id, quiz_id) {
  return function (dispatch) {
    // On successful POST:
    axios
      .post(`${URL}answer`, { quiz_id, answer_id })
      .then((res) => {
        dispatch({ type: actions.SET_SELECTED_ANSWER, payload: null });
        dispatch({ type: actions.SET_INFO_MESSAGE, payload: res.data.message });
        dispatch(fetchQuiz());
      })
      .catch((err) => console.log({ err }));
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz(news, trues, falses) {
  return function (dispatch) {
    axios
      .post(`${URL}new`, {
        question_text: news,
        true_answer_text: trues,
        false_answer_text: falses,
      })
      .then((resp) => {
        console.log("post quiz res", resp.data);
        // dispatch(setMessage(` You got a correct answer: ${resp.data.message}`));
        // dispatch(resetForm());
        dispatch({
          type: actions.SET_QUIZ_INTO_STATE,
          payload: resp.data.data,
        });
      })
      .catch((err) => {
        console.log("post quiz err", err);
      });

    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}

// export function postQuiz(news, trues, falses) {
//   return function (dispatch) {
//     // On successful POST:
//     // - Dispatch the correct message to the the appropriate state
//     axios
//       .post(`${URL}new`, {
//         question_text: news,
//         true_answer_text: trues,
//         false_answer_text: falses,
//       })
//       .then((res) => {
//         console.log("res", res.data.news);
//         dispatch({ type: actions.SET_QUIZ_INTO_STATE, payload: res.data.data });
//         // dispatch(
//         //   setMessage(` Congrats: ${res.data.news} is a great question!`)
//         // );
//       })
//       .catch((err) => console.log(err));
//     // - Dispatch the resetting of the form
//   };
// }

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
