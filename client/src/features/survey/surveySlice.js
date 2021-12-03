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

export const fetchSurveys = createAsyncThunk("surveys/fetch", async () => {
  const res = await axios.get("/api/surveys");
  return res.data;
});

// slice
export const surveySlice = createSlice({
  name: "survey",
  initialState: {
    status: "idle",
    surveys: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSurvey.pending, (state) => {
        state.status = "creatingSurvey";
      })
      .addCase(createSurvey.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(fetchSurveys.pending, (state) => {
        state.status = "fetchingSurveys";
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.status = "idle";
        state.surveys = action.payload;
      });
  },
});

export const selectStatus = (state) => state.survey.status;
export const selectSurveys = (state) => state.survey.surveys;

export default surveySlice.reducer;
