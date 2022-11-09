import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CATEGORY_API } from "../api/config";

const initialState = {
  value: null,
  status: "idle",
};

export const categoryAsync = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    try {
      if (initialState.value === null) {
        const response = await axios.get(CATEGORY_API);
        const data = await response.data.category;
        return data;
      }
    } catch (error) {
      console.log("Error fetch category", error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(categoryAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload;
      })
      .addCase(categoryAsync.rejected, (state) => {
        state.status = "failed";
        state.value = null;
      });
  },
});
export const selectCategory = (state) => state.category.value;
export const statusCategory = (state) => state.category.status;
export default categorySlice.reducer;
