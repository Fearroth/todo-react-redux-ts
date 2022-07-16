import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import TaskReducer from '../features/ListReducer/TaskReducer';

export const store = configureStore({
  reducer: {
    list: TaskReducer,
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


