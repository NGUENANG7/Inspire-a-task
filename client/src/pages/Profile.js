import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  //   const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isLoading === false && isAuthenticated === false) {
    return (
      <div className="m-3 text-center text-3xl font-mono">
        {' '}
        Please press the login button above to login
      </div>
    );
    // navigate('/');
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};