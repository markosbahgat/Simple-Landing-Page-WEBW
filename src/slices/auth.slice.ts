import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

interface IUser {
	name: string;
	token: string;
}
interface AuthState {
	loading: boolean;
	errorMessage: string | null | undefined;
	user: IUser | null;
}

const initialState: AuthState = {
	loading: false,
	errorMessage: null,
	user: null
};

const authUserSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {}
});

export const currentUser = (state: RootState) => state.auth.user;
export const authReducer = authUserSlice.reducer;
export const authState = (state: RootState) => state.auth;
