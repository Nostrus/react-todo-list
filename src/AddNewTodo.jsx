import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.5em 1em;
`;

const AddNewTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = () => {
        addTodo({
            completed: false,
            id: uuidv4(),
            title,
            description,
        });

        setTitle('');
        setDescription('');
    };

    return (
        <React.Fragment>
            <h4>Add new to do</h4>
            <Input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button primary={true} onClick={handleAddTodo}>
                Add
            </Button>
        </React.Fragment>
    );
};

export default AddNewTodo;
