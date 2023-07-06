import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import levelSlice from './slices/levelSlice';

// define store
export const store = configureStore({
  reducer: {
    user: userSlice,
    level: levelSlice,
  },
});
