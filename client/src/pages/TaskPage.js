import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import {TodoList} from '../components/TodoList';

export const TaskPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  console.log('TASK PAGE AUTH', isAuthenticated);

  if (isLoading) {
    return <div> Loadinggg....</div>;
  }

  if (isLoading === false && isAuthenticated === false) {
    navigate('/');
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-dark drop-shadow-lg text-2xl todo-app">
      <TodoList />
    </div>
  );
};
