import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

export function Wheel(props) {
  const handleClockwise = () => {
    props.moveClockwise(1);
  };

  const handleCounter = () => {
    props.moveCounterClockwise(1);
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`${props.wheel === 0 ? "cog active" : "cog"}`}
          style={{ "--i": 0 }}
        >
          {props.wheel === 0 ? "B" : ""}
        </div>
        <div
          className={`${props.wheel === 1 ? "cog active" : "cog"}`}
          style={{ "--i": 1 }}
        >
          {props.wheel === 1 ? "B" : ""}
        </div>
        <div
          className={`${props.wheel === 2 ? "cog active" : "cog"}`}
          style={{ "--i": 2 }}
        >
          {props.wheel === 2 ? "B" : ""}
        </div>
        <div
          className={`${props.wheel === 3 ? "cog active" : "cog"}`}
          style={{ "--i": 3 }}
        >
          {props.wheel === 3 ? "B" : ""}
        </div>
        <div
          className={`${props.wheel === 4 ? "cog active" : "cog"}`}
          style={{ "--i": 4 }}
        >
          {props.wheel === 4 ? "B" : ""}
        </div>
        <div
          className={`${props.wheel === 5 ? "cog active" : "cog"}`}
          style={{ "--i": 5 }}
        >
          {props.wheel === 5 ? "B" : ""}
        </div>

        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounter}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={handleClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = (store) => {
//   return {
//     wheel: store.wheel.counter,
//   };
// };

// export default connect(mapStateToProps, {
//   moveClockwise,
//   moveCounterClockwise,
// })(Wheel);

export default connect((st) => st, actions)(Wheel);
