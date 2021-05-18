import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../App.css';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log('FIRST TIME ONLY get notes from DB');
    Axios.get('http://localhost:8080/tasks').then(function (userData) {
      console.log('USER FROM DB!!!', userData);
      setTodos(userData.data?.tasks || []);
    });
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log('TODOS have changed!');
      var sendToBackedn = {
        todos: todos,
        userName: user.given_name,
      };
      Axios.post('http://localhost:8080/tasks', sendToBackedn).then(function (
        data
      ) {
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
      <h1> What are you working on today?</h1> <TodoForm onSubmit={addTodo} />{' '}
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
