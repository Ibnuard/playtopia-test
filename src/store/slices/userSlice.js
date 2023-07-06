import {createSlice} from '@reduxjs/toolkit';

// init user slices
const initialState = {
  user: [],
  loading: true,
  token: null,
  isSignOut: false,
};

// state slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: state => {
      state.user = [...state.value];
    },
  },
});

// automate action creator
export const {setUser} = userSlice.actions;

// export slice
export default userSlice.reducer;
