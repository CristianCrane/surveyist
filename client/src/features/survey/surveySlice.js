import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../auth/authSlice";
import axios from "axios";

// thunks
export const createSurvey = createAsyncThunk(
  "surveys/create",
  async (survey, { dispatch }) => {
    const response = await axios.post("/api/surveys", survey);
    dispatch(updateUser(response.data));
  }
);

// slice
export const surveySlice = createSlice({
  name: "survey",
  initialState: {
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSurvey.pending, (state) => {
        state.status = "creatingSurvey";
      })
      .addCase(createSurvey.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export const selectStatus = (state) => state.survey.status;

export default surveySlice.reducer;
