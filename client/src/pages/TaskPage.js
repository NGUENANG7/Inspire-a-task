import { useAuth0 } from '@auth0/auth0-react';

import { TodoList, Profile } from '../components';

export const TaskPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div> Loading... </div>;
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
        <Profile />
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-dark drop-shadow-lg text-2xl todo-app">
          <TodoList />
        </div>
      </>
    )
  );
};
