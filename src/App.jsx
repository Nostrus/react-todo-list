import React, { useReducer } from 'react';
import './App.css';
import TodoList from './TodoList';
import styled from 'styled-components';
import AddNewTodo from './AddNewTodo';
import TodoReducer from './TodoReducer';

const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`;

function App() {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <Wrapper>
            <AddNewTodo addTodo={dispatch} />
            <TodoList todos={todos} dispatch={dispatch} />
        </Wrapper>
    );
}

export default App;
