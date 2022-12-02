import {
  configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
import searchGiphysSlice from '../features/test/testSlice';

export const store = configureStore({
  reducer: {
    giphyData: searchGiphysSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
