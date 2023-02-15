import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  incrementByValue: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //increment value by incrementByValue if it's larger than 1
      if (state.incrementByValue > 1) {
        state.value += state.incrementByValue;
      } else {
        state.value += 1;
      }
    },
    decrement: (state) => {
      //decrement value by incrementByValue if it's larger than 1
      if (state.incrementByValue > 1) {
        state.value -= state.incrementByValue;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      //set incrementByValue to the value selected
      state.incrementByValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
