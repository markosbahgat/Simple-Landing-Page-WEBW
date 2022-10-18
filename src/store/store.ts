import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistedReducer, RootState } from './rootReducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
