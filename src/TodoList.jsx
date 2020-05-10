import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    const toggleCompleted = (id) => {
        const newTodos = [...todos];
        newTodos.forEach((todoItem) => {
            if (todoItem.id === id) {
                todoItem.completed = !todoItem.completed;
            }
        });

        setTodos(newTodos);
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
