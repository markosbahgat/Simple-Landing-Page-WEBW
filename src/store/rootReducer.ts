import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'slices/auth.slice';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from './storage';

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage,
	whitelist: ['auth']
};

const rootReducer = combineReducers({
	auth: authReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
