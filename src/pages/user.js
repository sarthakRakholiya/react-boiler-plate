/**
 * It renders the AppLayout component, which in turn renders the User component
 * @returns The AppLayout component is being returned with the User component nested inside of it.
 */
import React from 'react';
import UserMain from '../components/pages/user';

const User = () => {
  return (
    <>
      <UserMain />
    </>
  );
};

export default User;
