import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { MCState, ColumnType, SelectStatus, ItemType } from './type';
import { ColumnIndex, ColumnIndexList } from '../../pages/miller-columns/type';
import { initialState } from './state';

const NAME_SPACE = 'miller-columns';

export const mcSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    toggleCheckBox(state, { payload }:PayloadAction<{id:string, columnIndex:ColumnIndex}>):void {
      const {id, columnIndex} = payload;
      const currentIndex = ColumnIndexList.indexOf(columnIndex);

      //toggle check box status
      const list:ColumnType[] = state[columnIndex].list.map(
        (item) => item.id === id && item.type === ItemType.File ? {...item, isChecked: !item.isChecked} : item);
      state[columnIndex] = {...state[columnIndex], list};

      // change select status to pending
      let newColumnIndexList = ColumnIndexList.slice();
      let lastColumnIndex = newColumnIndexList.pop();
      if (columnIndex === lastColumnIndex) {
        newColumnIndexList.forEach((index) => {
          let lastList = state[index].list.map((item) => item.isUnfolded ? {...item, selectStatus: SelectStatus.Pending} : item) 
          state[index] = {...state[index], list: lastList};
        })
      }

      // auto select when all item being selected
      let preIndex = ColumnIndexList[currentIndex - 1];
      if (state[columnIndex].list.every((item) => item.isChecked || item.selectStatus === SelectStatus.Selected) && currentIndex - 1 > -1) {
        let preIndexList = state[preIndex as ColumnIndex].list.map((item) => item.isUnfolded ? {...item, selectStatus: SelectStatus.Selected} : item);
        state[preIndex as ColumnIndex] = {...state[preIndex as ColumnIndex], list: preIndexList};
      }

      // select all by one click

      // let nextIndex = ColumnIndexList[currentIndex + 1];
      // if (currentIndex + 1 < ColumnIndexList.length && state[nextIndex].list.every((item) => item.isChecked)) {
      //   const currentList:ColumnType[] = state[columnIndex].list.map(
      //     (item) => item.id === id && item.type === ItemType.File ? {...item, selectStatus: SelectStatus.None} : item);
      //   state[columnIndex] = {...state[columnIndex], list};
      // }
    },
    toggleUnfoldBox(state, { payload }:PayloadAction<{id:string, columnIndex:ColumnIndex}>):void {
      const { id, columnIndex } = payload;

      // change unfold status
      const list:ColumnType[] = state[columnIndex].list.map(
        (item) => item.id === id ? {...item, isUnfolded: true} : {...item, isUnfolded: false});
      state[columnIndex] = {...state[columnIndex], list};

      // empty columns behind current index 
      const currentIndex = ColumnIndexList.indexOf(columnIndex);
      ColumnIndexList.slice(currentIndex + 1).forEach((index) => state[index] = {...state[index], list: []});

      // assigned current children to the next index
      const currentColumn= state[columnIndex].list.find((item) => item.id === id);
      const currentChildren = currentColumn?.children;
      const nextIndex = ColumnIndexList[currentIndex + 1];
      state[nextIndex] = {...state[nextIndex], list: [...currentChildren as  any]};
    },
    setExpandedStatusToActive(state) {
      state.isExpanded = true;
    },
  },
});

export const {
  toggleCheckBox,
  toggleUnfoldBox,
  setExpandedStatusToActive,
} = mcSlice.actions;