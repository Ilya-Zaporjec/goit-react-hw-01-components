import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h1> {title}</h1>
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: '',
  children: PropTypes.node.isRequired,
};

export default Section;
