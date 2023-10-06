import { createSlice, configureStore } from '@reduxjs/toolkit';

//createSlice - reducer와 action 함께 생성하는 함수
// const counterSlice = createSlice({
//     name : 'counter',
//     initialState : { counter : 0 },
//     reducers : {
//         increment(state, action) {
//             state.counter++;
//         },
//         decrement(state, action) {
//             state.counter--;
//         },
//         addValue(state, action) {
//             const { ten } = action.payload;
//             state.counter += ten;
//         }
//     }
// });

// const initLogin = { isLogin : false };
// const loginSlice = createSlice({
//     name : 'isLogin',
//     initialState : initLogin,
//     reducers : {
//         login(state) {
//             state.isLogin = true;
//         },
//         logout(state) {
//             state.isLogin = false;
//         }
//     }
// })
import  counterReducer  from './divide/counter';
import  loginReducer  from './divide/login';
const store = configureStore({
    reducer : {
        counter : counterReducer,
        login : loginReducer
    }
})

export default store;

