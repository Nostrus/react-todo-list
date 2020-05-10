import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    console.log('Todolist:', todos);

    const toggleCompleted = (id) => {
        const newTodos = [...todos];
        newTodos.forEach((todoItem) => {
            if (todoItem.id === id) {
                todoItem.completed = !todoItem.completed;
            }
        });

        setTodos(newTodos);
    };

    return todos.map((todo) => (
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
