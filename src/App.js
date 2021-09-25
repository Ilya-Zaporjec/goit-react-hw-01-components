import React from 'react';
import Section from './components/Section';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticsData from './components/Statistics/statistical-data.json';

import FriendsList from './components/friends/FriendsList';
import friends from './components/friends/Friends.json';

import TransactionHistory from './components/transaction/Transaction';
import transactions from './components/transaction/transactions.json';

export default function App() {
  return (
    <>
      <Section title="Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Statistic">
        <Statistics title="Upload stats" statistics={statisticsData} />
      </Section>

      <Section title="FriendsList">
        <FriendsList friends={friends} />
      </Section>

      <Section title="TransactionHistory">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
}
