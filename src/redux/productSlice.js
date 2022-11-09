import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_API } from "../api/config";

const initialState = {
  value: [
    {
      id: 0,
      image: "",
      title: "",
      "price-value": 0,
      discount: "",
      "price-original": 0,
      "store-loaction": "",
      condition: "",
      weight: "",
      category: "",
      stock: "",
      color: "",
      material: "",
    },
  ],
  selectedValue: null,
  status: "idle",
};

export const productAsync = createAsyncThunk(
  "category/fetchProduct",
  async () => {
    try {
      let response = await axios.get(PRODUCT_API);
      let data = await response.data.product;
      return data;
    } catch (error) {
      console.log("Error Fetch Product", error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectOneProduct: (state, action) => {
      localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
      state.selectedValue = action.payload;
    },
    loadFromLocalStorage: (state) => {
      try {
        const storage = localStorage.getItem("selectedProduct");
        if (storage === null) return undefined;
        const json = JSON.parse(storage);
        state.selectedValue = json;
      } catch (e) {
        console.warn(e);
        return undefined;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value = [...initialState.value, ...action.payload];
      })
      .addCase(productAsync.rejected, (state) => {
        state.status = "failed";
        state.value = null;
      });
  },
});
export const { selectOneProduct, loadFromLocalStorage } = productSlice.actions;
export const selectProduct = (state) => state.product.value;
export const selectedProduct = (state) => state.product.selectedValue;
export const statusProduct = (state) => state.product.status;
export default productSlice.reducer;
