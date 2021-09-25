import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

function UpperCase(word) {
  return word.split('')[0].toUpperCase() + word.slice(1);
}

function TransactionHistory({ transactions }) {
  const arrayTransaction = transactions.map((transaction, stroke) => {
    const colorStroke = stroke % 2 !== 0 ? s.colorHeading : 0;

    return (
      <tr key={transaction.id} className={colorStroke}>
        <td className={s.tdtype}>{UpperCase(transaction.type)}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  });

  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className="">Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{arrayTransaction}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
