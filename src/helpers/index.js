
// Reducer function
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload];
        case 'upDateState':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            });
        case 'deleteTodo':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};