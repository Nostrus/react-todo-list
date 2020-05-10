import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import styled from 'styled-components';
import AddNewTodo from './AddNewTodo';

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`;

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <Wrapper>
            <AddNewTodo addTodo={addTodo} />
            <TodoList todos={todos} setTodos={setTodos} />
        </Wrapper>
    );
}

export default App;
