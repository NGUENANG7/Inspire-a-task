import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [goal, setGoal] = useLocalStorage('goalNumber', '');
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(goal);
  };
  //   const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isLoading === false && isAuthenticated === false) {
    return (
      <div className="m-3 text-center text-3xl font-mono">
        {' '}
        Please press the login button above to login.
      </div>
    );
    // navigate('/');
  }

  return (
    isAuthenticated && (
      <>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="text-center">
          <div className="text-mono text-3xl">
            {' '}
            <p>How many tasks would you like to complete before your reward?</p>
            <p>Your current goal is: {goal}</p>
          </div>
          <div>
            <form className="m-4 flex-center" onSubmit={onSubmit}>
              <input
                className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="Your Task Goal"
                type="number"
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                }}
              />
              <button
                className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
                type="submit"
              >
                Set Goal
              </button>
            </form>
          </div>
        </div>
      </>
    )
  );
};
