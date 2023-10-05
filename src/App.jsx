import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}> {text} </button>;
  };

  const Statistics = () => {
    return (
      <>
        <h1> statistics </h1>
        <p> good {good} </p>
        <p> neutral {neutral} </p>
        <p> bad {bad} </p>
        <p> all {total} </p>
        <p> average {average} </p>
        <p> positive feedback {positivePercentage}% </p>
      </>
    );
  };

  const goodFeed = () => {
    setGood(good + 1);
    setFeedback(true);
  };
  const neutralFeed = () => {
    setNeutral(neutral + 1);
    setFeedback(true);
  };
  const badFeed = () => {
    setBad(bad + 1);
    setFeedback(true);
  };

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={goodFeed} text="good" />
      <Button handleClick={neutralFeed} text="neutral" />
      <Button handleClick={badFeed} text="bad" />
      {feedback ? <Statistics /> : <>
        <h1> statistics </h1>
        <p> No feedback given </p>
      </>}
    </div>
  );
}

export default App;
