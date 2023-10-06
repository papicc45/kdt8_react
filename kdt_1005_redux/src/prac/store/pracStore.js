import { createStore } from 'redux';

export const ADD_CART = 'ADD_CART';
export const  REMOVE_CART = "REMOVE_CART";
//reducer
const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_CART:
            return [...state, action.item];
        case REMOVE_CART:
            return state.filter((value) => value.id !== action.id);
        default:
            return state;
    }
};

const pracStore = createStore(reducer);

export default pracStore;