import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../types/User";

interface UserState {
  user: AuthResponse | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponse | null>) => {
      state.user = action.payload;
      if (action.payload?.token)
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload?.token).split('"').join("")
        );
      else localStorage.removeItem("token");
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
