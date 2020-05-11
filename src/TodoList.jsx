import React from 'react';
import Todo from './Todo';
import { TODO_TOGGLE } from './Actions';

const TodoList = ({ todos, dispatch }) => {
    const toggleCompleted = (id) => {
        dispatch({ type: TODO_TOGGLE, payload: { id } });
    };

    return todos
        .sort((a, b) => {
            if (a.completed && !b.completed) {
                return 1;
            }

            if (b.completed && !a.completed) {
                return -1;
            }

            return 0;
        })
        .map((todo) => (
            <Todo
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                key={todo.id}
                id={todo.id}
                toggleCompleted={() => toggleCompleted(todo.id)}
            />
        ));
};

export default TodoList;
