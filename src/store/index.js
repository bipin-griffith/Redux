// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, hidden: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT(state) {
            state.counter ++;
        },
        Increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        DECREMENT(state) {
            state.counter --;
        },
        toggle(state) {
            state.hidden = !state.hidden;
        },
    }
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       hidden: state.hidden,
//     };
//   }

//   if (action.type === "Increase") {
//     return {
//       counter: state.counter + action.amount,
//       hidden: state.hidden,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       hidden: state.hidden,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       hidden: !state.hidden,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;

export default store;
