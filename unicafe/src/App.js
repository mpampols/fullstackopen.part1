import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  var average = 0;
  var positive = 0;

  if (all !== 0) {
    average = (props.good - props.bad) / all;
    positive = (props.good / all) * 100;
  }

  if (all === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={props.good}></Statistic>
            <Statistic text="neutral" value={props.neutral}></Statistic>
            <Statistic text="bad" value={props.bad}></Statistic>
            <Statistic text="all" value={all}></Statistic>
            <Statistic text="average" value={average}></Statistic>
            <Statistic text="positive" value={positive}></Statistic>
          </tbody>
        </table>
      </div>
    );
  }
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
