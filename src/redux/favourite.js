import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: [],
    isClickedIcon: false,
    notification: false,
  },
  reducers: {
    addItemToFavourite(state, action) {
      const newProduct = action.payload;
      const checkExistingProduct = state.items.find(
        (item) => item.id === newProduct.id
      );
      if (checkExistingProduct) {
        return;
      } else {
        state.items.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          category: newProduct.category,
          image: newProduct.image,
        });
        state.isClickedIcon = true;
      }
    },
    removeItemToFavourite(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.notification = true;
    },
  },
});

export const favActions = favouriteSlice.actions;

export default favouriteSlice;
