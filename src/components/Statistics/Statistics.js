import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={s.Statistics__title}>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total}</p>
      </div>

      <p>
        Positive feedback: &nbsp;
        <span className={s.Positive}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
