// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import * as types from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE: {
      console.log("state", state);
      return state >= 5 ? (state = initialWheelState) : state + action.payload;
    }
    case types.MOVE_COUNTERCLOCKWISE: {
      return state <= 0 ? (state = 5) : state - action.payload;
    }
    default:
      return state;
  }
}

const initialQuizState = [];
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: {
      return { ...state, state: action.payload };
    }
    default:
      return state;
  }

  //   case types.SET_QUIZ_INTO_STATE:
  //     if (action.payload) {
  //       return { ...state, state: action.payload };
  //     } else {
  //       return initialQuizState;
  //     }

  //   default:
  //     return state;
  // }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
      return action.payload;
  }
  return state;
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
      return action.payload;
  }
  return state;
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
