import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callDetails from '../Components/services/sevices';

const initialState = {
  productItems: {},
};
export const getDetails = createAsyncThunk('details/getDetails', async (id) => {
  const { data } = await callDetails(id);
  return data;
});

export const details = createSlice({
  name: 'details',
  initialState,
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => {
      const detailss = action.payload;
      const theState = state;
      theState.productItems = detailss;
    },
  },
});

export default details.reducer;
