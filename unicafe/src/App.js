import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;
  return (
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </div>
  );
};

const App = () => {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);

  const addGoodValue = (value) => {
    setGoodValue(value);
  };

  const addNeutralValue = (value) => {
    setNeutralValue(value);
  };

  const addBadValue = (value) => {
    setBadValue(value);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => addGoodValue(good + 1)} text="good"></Button>
      <Button
        handleClick={() => addNeutralValue(neutral + 1)}
        text="neutral"
      ></Button>
      <Button handleClick={() => addBadValue(bad + 1)} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
