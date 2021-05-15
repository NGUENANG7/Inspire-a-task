import React, {
    useState
} from 'react';
import TodoForm from './TodoForm';
import {
    RiCloseCircleLine
} from 'react-icons/ri';
import {
    TiEdit
} from 'react-icons/ti';

const Todo = ({
    todos,
    completeTodo,
    removeTodo,
    updateTodo
}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
