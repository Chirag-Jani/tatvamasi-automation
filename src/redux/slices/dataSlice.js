import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../resources/data/data";

const initialState = {
  data: data,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getData: (state) => {
      state.data = data;
    },
  },
});

export const { getData } = userSlice.actions;
export default userSlice.reducer;
