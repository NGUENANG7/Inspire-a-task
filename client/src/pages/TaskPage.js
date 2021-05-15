import { useAuth0 } from '@auth0/auth0-react';

import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import TodoForm from './pages/TodoForm';
import Todo from './pages/Todo';

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
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-dark drop-shadow-lg text-2xl">
      This is a task page
    </div>
  );
};

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
      console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removedArr);
  };

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
          }
          return todo;
      });
      setTodos(updatedTodos);
  };

  return ( <
      >
      <
      h1 > What are you working on today?</h1> <
      TodoForm onSubmit = {
          addTodo
      }
      /> <
      Todo todos = {
          todos
      }
      completeTodo = {
          completeTodo
      }
      removeTodo = {
          removeTodo
      }
      updateTodo = {
          updateTodo
      }
      /> <
      />
  );
}

export default TodoList;