import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseApi } from '../../utils/baseApi';

const initialState = {
  data: [],
  status: '',
};

export const searchGiphs = createAsyncThunk(
  'zipCode/fetchZipCode',
  async (search: string) => {
    const response = await baseApi.get(
      `/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${search}&limit=10`,
    );
    return response.data;
  },
);

export const searchGiphysSlice = createSlice({
  name: 'giphs',
  initialState,
  reducers: {
    getGyphsData: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchGiphs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchGiphs.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload.data;
      })
      .addCase(searchGiphs.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { getGyphsData } = searchGiphysSlice.actions;

export default searchGiphysSlice.reducer;
