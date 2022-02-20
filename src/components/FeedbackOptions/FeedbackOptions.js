import React from "react";
import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.FeedbackOptions}>
      {options.map((option) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
