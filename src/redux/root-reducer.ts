import { combineReducers } from 'redux';
import { uiSlice } from './ui';
import { mcSlice } from './miller-columns';
export const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  millerColumns: mcSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
