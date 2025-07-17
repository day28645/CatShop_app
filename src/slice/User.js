    // features/counter/counterSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    const AuthSlice = createSlice({
      name: 'auth',
      initialState: { token: "" },
      reducers: {
        Gettoken: (state) => {
           return this.state;
        },
        SaveToken: (state,actions) => {
          state.token  = actions;
        },
      },
    });

    export const { SaveToken, Gettoken } = AuthSlice.actions;
    export default AuthSlice.reducer;