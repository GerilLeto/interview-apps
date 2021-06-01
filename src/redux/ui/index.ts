import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

const NAME_SPACE = 'ui';
export interface UIState {
  currentTime:number;
}

const initialState:UIState = {
  currentTime: 0,
};

export const uiSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    initUIState(state) {
      state.currentTime = 0;
    },
    setCurrentTime(state, { payload }:PayloadAction<number>):void {
      state.currentTime = payload;
    },
  },
});

export const {
  initUIState,
  setCurrentTime,
} = uiSlice.actions;
export const getCurrentTime = createAction(`${NAME_SPACE}/getCurrentTime`);