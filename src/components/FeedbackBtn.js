import React from "react";
import s from "./Feedback.module.css";

const FeedbackBtn = ({ onGood, onNeutral, onBad }) => (
  <div className="btn">
    <button type="button" onClick={onGood} className={s.feedbackBtn}>
      Good
    </button>
    <button type="button" onClick={onNeutral} className={s.feedbackBtn}>
      Neutral
    </button>
    <button type="button" onClick={onBad} className={s.feedbackBtn}>
      Bad
    </button>
  </div>
);

export default FeedbackBtn;
