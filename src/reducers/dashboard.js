import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mfeList: [],
};
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    mfeFetchSuccess: (state, { payload = [] }) => {
      state.mfeList = payload || [];
    },
    mfeFetchFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default dashboardSlice.reducer;
export const { mfeFetchSuccess, mfeFetchFailure } = dashboardSlice.actions;
