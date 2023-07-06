import {createSlice} from '@reduxjs/toolkit';

// init user slices
const initialState = {
  userData: {},
  loading: true,
  token: null,
  isSignOut: false,
};

// state slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.userData = action.payload.user;
      state.loading = false;
      state.token = action.payload.user.token;
      state.isSignOut = false;
    },
    setSignOut: state => {
      state.userData = null;
      state.loading = false;
      state.token = null;
      state.isSignOut = true;
    },
    setRestoreToken: (state, action) => {
      state.userData = {name: 'halo'};
      state.loading = false;
      state.token = action.payload.token;
      state.isSignOut = false;
    },
  },
});

// automate action creator
export const {setSignIn, setSignOut, setRestoreToken} = userSlice.actions;

// define selector
export const selectUser = state => state.user;

// export slice
export default userSlice.reducer;
