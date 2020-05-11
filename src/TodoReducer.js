import { TODO_TOGGLE, TODO_ADD } from './Actions';

const TodoReducer = (state, action) => {
    if (
        action.type === TODO_ADD &&
        action.payload.title &&
        action.payload.description
    ) {
        return [...state, action.payload];
    }

    if (action.type === TODO_TOGGLE) {
        return state.map((todo) => {
            if (todo.id === !action.payload.id) {
                return todo;
            }
            return { ...todo, completed: !todo.completed };
        });
    }

    return state;
};

export default TodoReducer;
