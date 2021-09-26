import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title = 'Upload stats', statistics }) {
  const stringId = string => (isNaN(string) ? Number(string.slice(3)) : string);

  return (
    <div className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
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
              className={s.item}
              key={stringId(item.id)}
            >
              <span className={s.label}>{item.label} </span>
              <span className={s.percentage}>{item.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
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
