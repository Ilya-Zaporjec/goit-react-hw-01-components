import React from 'react';
import Section from './components/Section';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticsData from './components/Statistics/statistical-data.json';

// import FriendList from './friend-list/FriendList';
// import friends from './friend-list/frieds.json';

// import TransactionHistory from './transaction-history/TransactionHistory';
// import transactions from './transaction-history/transactions.json';

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

      {
        <Section title="Statistic">
          <Statistics title="Upload stats" statistics={statisticsData} />
        </Section>

        // <Section title="FriendsList">
        //   <FriendList friends={friends} />
        // </Section>

        // <Section title="TransactionHistory">
        //   <TransactionHistory transactions={transactions} />
        // </Section>
      }
    </>
  );
}
