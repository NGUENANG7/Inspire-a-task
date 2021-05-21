import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../App.css';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log('FIRST TIME ONLY get notes from DB');
    Axios.post('/get-tasks', user).then(function (userData) {
      console.log('USER FROM DB!!!', userData);
      setTodos(userData.data?.tasks || []);
    });
  }, [user]);

  useEffect(() => {
    if (todos.length > 0) {
      console.log('TODOS have changed!');
      var sendToBackedn = {
        todos: todos,
        userName: user.given_name,
        email: user.email,
      };
      Axios.post('/tasks', sendToBackedn).then(function (data) {
        console.log('we got this back from the BE', data);
      });
    }
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    todo.isComplete = false;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    setTodos(updatedTodos);
  };
  console.log('Our todo state!!!', todos);
  return (
    <>
      <h1> What inspired tasks will complete today ?</h1>{' '}
      <p className="m-1 font-mono">
        Task Goal for today:{' '}
        <span className="text-purple-600">
          {JSON.parse(localStorage.getItem('goalNumber'))}
        </span>
      </p>
      <p className="mt-1">Click on your task to mark it as completed!</p>
      <p className="mb-1 text-base text-red-400">
        Hint: You may set your goal above by hitting the set goal button{' '}
      </p>
      <p className="mb-4 mt-1 p-2">
        {' '}
        When you have completed your goal reward yourself on our reward page!
      </p>
      <TodoForm onSubmit={addTodo} />{' '}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />{' '}
    </>
  );
};

export default TodoList;
