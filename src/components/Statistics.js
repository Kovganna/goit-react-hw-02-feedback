import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <div>
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positive}%</li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positiveFeedback: PropTypes.func,
};

export default Statistics;
