import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, statistics }) => {
  const stringId = string => (isNaN(string) ? Number(string.slice(3)) : string);

  return (
    <section className={statistics}>
      <h2 className={title}>{title}</h2>

      <ul className="statlist">
        {statistics.map(item => {
          const rgb =
            'rgb(' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ')';
          return (
            <li
              style={{
                backgroundColor: rgb,
              }}
              className="statlist__item"
              key={stringId(item.id)}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.objectOf({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
};

export default Statistics;
