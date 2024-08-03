import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@services/auth/types";

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializedApp: (
      state,
      action: PayloadAction<Omit<AuthState, "isInitialized">>
    ) => {
      const { isAuthenticated, user } = action.payload;

      state.isInitialized = true;
      state.user = user;
      state.isAuthenticated = isAuthenticated;
    },
    setUser: (state, action) => {
      state.isInitialized = true;
      state.user = action.payload;
    },
  },
});

export const { initializedApp, setUser } = authSlice.actions;
export default authSlice.reducer;
