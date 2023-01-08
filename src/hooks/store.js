import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState : {
    name : 'kim',
    age : 20,
  },
  reducers: {
    // changeName(state) {
    //   state.name = 'park';
    // },
    increase(state) {
      state.age += 1;
    },
  }
})

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
  ],
  reducers: {
    addCount(state, action) {
      const idx = state.findIndex((e) => e.id === action.payload);
      state[idx].count++;
    }
  }
})

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  }
})

export const { increase } = user.actions;
export const { addCount } = cart.actions;