import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={s.Section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
