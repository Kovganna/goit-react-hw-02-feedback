import React from "react";
import FeedbackBtn from "./FeedbackBtn";
import FeedbackValue from "./FeedbackValue";

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
        <FeedbackBtn
          onGood={this.handleGoodIncrement}
          onNeutral={this.handleNeutralIncrement}
          onBad={this.handleBadIncrement}
        />
        <h2>Statistics</h2>
        <FeedbackValue
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
