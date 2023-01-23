import { configureStore } from '@reduxjs/toolkit'
import eCommerce from "../Features/Features"

export const store = configureStore({
  reducer: {
    commerce : eCommerce
  },
})