import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeatherData } from "../../models/models";

interface WeatherState {
  loading: boolean;
  error: string;
  data: IWeatherData;
}

const initialState: WeatherState = {
  loading: false,
  error: "",
  data: {} as IWeatherData,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IWeatherData>) {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default weatherSlice.reducer;
