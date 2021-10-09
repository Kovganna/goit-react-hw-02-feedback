import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const FeedbackBtn = ({ grades, onFeedbackValue }) => (
  <div className="btn">
    {grades.map((grade) => (
      <button
        key={grade}
        type="button"
        value={grade}
        onClick={onFeedbackValue}
        className={s.feedbackBtn}
      >
        {grade}
      </button>
    ))}
  </div>
);

FeedbackBtn.propTypes = {
  grades: PropTypes.array,
  onFeedbackValue: PropTypes.func.isRequired,
};

export default FeedbackBtn;
