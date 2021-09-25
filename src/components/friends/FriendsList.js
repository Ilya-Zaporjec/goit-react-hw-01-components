import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

function FriendsList({ friends }) {
  const status = onLine => (onLine ? s.statusOnLine : s.statusOffLine);

  return (
    <ul className={s['friend-list']}>
      {friends.map(friend => {
        return (
          <li className={s.item} key={friend.id}>
            <span className={status(friend.isOnline)}></span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendsList;
