import React from "react";

const FeedbackValue = ({ valueGood, valueNeutral, valueBad }) => (
  <div>
    <ul className="statsName">
      <li className="good">Good:{valueGood}</li>
      <li className="neutral">Neutral:{valueNeutral}</li>
      <li className="bad">Bad:{valueBad}</li>
    </ul>
  </div>
);

export default FeedbackValue;
