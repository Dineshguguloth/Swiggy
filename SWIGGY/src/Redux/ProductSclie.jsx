import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardData: [],
};

export const FirstSclie = createSlice({
  name: "forwardData",
  initialState,
  reducers: {
    forwordData: (state, action) => {
      console.log(action.payload, "action pa");
      const dineshData = state.cardData.find(
        (pro) => pro.id === action.payload.id
      );
      console.log(dineshData, "dineshdata");

      if (dineshData) {
        dineshData.Quantity += 1;
        dineshData.totalPrice = dineshData.price * dineshData.Quantity;
      } else {
        state.cardData.push({ ...action.payload });
      }
    },

    Deceases: (state, action) => {
      const dineshData1 = state.cardData.find(
        (prod) => prod.id === action.payload.id
      );
      if (dineshData1 && dineshData1.Quantity > 1) {
        dineshData1.Quantity -= 1;
        dineshData1.totalPrice = dineshData1.price * dineshData1.Quantity;
      }
    },

    RemoveCard: (state, action) => {
      state.cardData = state.cardData.filter(
        (info) => info.id !== action.payload.id
      );
    },
  },
});

export const { forwordData, Deceases, RemoveCard } = FirstSclie.actions;
export default FirstSclie.reducer;
