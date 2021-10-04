import React from "react";
import s from "./Feedback.module.css";

class Feedback extends React.Component {
  render() {
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <button type="button" className={s.feedbackBtn}>
          Good
        </button>
        <button type="button" className={s.feedbackBtn}>
          Neutral
        </button>
        <button type="button" className={s.feedbackBtn}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul className="statsName">
          <li className="good">Good:0</li>
          <li className="neutral">Neutral:0</li>
          <li className="bad">Bad:0</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
