import { Component } from "react";
import FeedbackBtn from "./FeedbackBtn";
import Statistics from "./Statistics";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackValue = (e) => {
    const FeedbackBtn = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [FeedbackBtn]: prevState[FeedbackBtn] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotalFeedback = this.countTotalFeedback();

    return countTotalFeedback
      ? Math.round((this.state.good * 100) / countTotalFeedback)
      : 0;
  };

  render() {
    const grades = ["good", "neutral", "bad"];
    const { onFeedbackValue } = this;
    const countTotalFeedback = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <FeedbackBtn grades={grades} onFeedbackValue={onFeedbackValue} />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Feedback;
