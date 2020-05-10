import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    padding: 0.5em 0;
    color: #444;

    ${(props) => {
        return (
            props.completed &&
            css`
                background: #eee;
                color: #aaa;
                font-style: italic;
            `
        );
    }};
`;

const Label = styled.label`
    color: #222;
    font-weight: ${(props) => (props.completed ? 'normal' : 'bold')};
    margin-left: 1em;
    vertical-align: middle;
`;

const Text = styled.p`
    margin-top: 1em;
    margin-left: 2em;
`;

const Todo = ({ completed, title, description, id, toggleCompleted }) => {
    const handleToggle = () => {
        toggleCompleted(id);
    };

    return (
        <Wrapper completed={completed}>
            <input
                type="checkbox"
                defaultChecked={completed ? true : false}
                onClick={handleToggle}
            />
            <Label>{title}</Label>
            <Text>{description}</Text>
        </Wrapper>
    );
};

export default Todo;
