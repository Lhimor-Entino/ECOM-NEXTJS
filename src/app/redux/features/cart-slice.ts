import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItemInterface {
  id: string;
  productType: string;
  product_name: string;
  img: string;
  price: number;
  desc: string;
  size: number;
  purchase_option: number; // 1 tray
  quantity: number;
}
const cartItems: CartItemInterface[] = [];

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: cartItems,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemInterface>) => {
      const newCartItems = [...state, action.payload];
      state = newCartItems;

      return state;
    },
    updateCart: (state, action: PayloadAction<CartItemInterface>) => {
      const newCartItems = cartItems.map((item, index) =>
        item.id == action.payload.id ? action.payload : item
      );
      return newCartItems;
    },
    removeToCart: (state, action: PayloadAction<string[]>) => {
      const updatedCart = state.filter(
        (item) => !action.payload.includes(item.id)
      );
      console.log(action.payload);

      console.log(updatedCart);
      return updatedCart;
    },
  },
});
export const { addToCart, updateCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
