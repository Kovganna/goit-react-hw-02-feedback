import React from "react";
// import FeedbackBtn from "./FeedbackBtn";
// import FeedbackValue from "./FeedbackValue";
import s from "./Feedback.module.css";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralIncrement = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadIncrement = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <div className="btn">
          <button
            type="button"
            onClick={this.handleGoodIncrement}
            className={s.feedbackBtn}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.handleNeutralIncrement}
            className={s.feedbackBtn}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.handleBadIncrement}
            className={s.feedbackBtn}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <ul className="statsName">
            <li className="good">Good:{this.state.good}</li>
            <li className="neutral">Neutral:{this.state.neutral}</li>
            <li className="bad">Bad:{this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
