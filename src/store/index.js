import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

// define store
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
