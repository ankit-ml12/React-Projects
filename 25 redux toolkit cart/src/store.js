import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartslice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export { store }
