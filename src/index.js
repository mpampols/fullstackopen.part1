import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
