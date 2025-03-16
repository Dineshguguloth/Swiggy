import { configureStore } from "@reduxjs/toolkit";
import FirstSclie from "../Redux/ProductSclie";

const Store = configureStore({
  reducer: {
    FirstSclie,
  },
});

export default Store;
