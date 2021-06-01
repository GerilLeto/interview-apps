import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { MCState } from './type';
import { initialState } from './state';

const NAME_SPACE = 'miller-columns';

export const mcSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    setCurrentTime(state, { payload }:PayloadAction<number>):void {
      // state.currentTime = payload;
    },
  },
});

export const {
  setCurrentTime,
} = mcSlice.actions;