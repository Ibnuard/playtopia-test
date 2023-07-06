import {createSlice} from '@reduxjs/toolkit';

// init level slice
const initialState = {
  level: [
    {
      type: 'BRONZE',
      point: 1000,
      title: 'Bronze',
    },
    {
      type: 'SILVER',
      point: 5000,
      title: 'Silver',
    },
    {
      type: 'GOLD',
      point: 10000,
      title: 'Gold',
    },
  ],
};

// state slice
export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {},
});

// define selector
export const selectLevel = state => state.level;

// export default
export default levelSlice.reducer;
