import cx from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/root-reducer';
import { toggleCheckBox, toggleUnfoldBox, setExpandedStatusToActive } from '../../../../redux/miller-columns/index';
import { ColumnType, SelectStatus, ItemType } from '../../../../redux/miller-columns/type';
import { ColumnIndex } from '../../type';
import './index.scss';

const ITEM_LIMITED = 10;
export interface ColumnProps {
  columnIndex:ColumnIndex,
}
export const Column:React.FC<ColumnProps> = React.memo(({
  columnIndex,
}) => {
  const dispatch = useDispatch();
  const { millerColumns } = useSelector((state:RootState) => state);
  const { isExpanded } = millerColumns;
  const selectStatusMap = {
    [SelectStatus.None]: '⬜️',
    [SelectStatus.Pending]: '🟫',
    [SelectStatus.Selected]: '✅',
  };
  const filesList:ColumnType[] = millerColumns[columnIndex].list;
  const len = filesList.length;
  const showingNum = (totalNum:number) => totalNum > ITEM_LIMITED ? ITEM_LIMITED : totalNum;
  const titleText = columnIndex === ColumnIndex.FirstColumn ? `${len} in total` : `showing ${showingNum(len)} of ${len}`;
  const handleBtnClick = () => {
    dispatch(setExpandedStatusToActive());
  }
  const handleFoldedBoxClick = (id:string) => {
    dispatch(toggleUnfoldBox({id, columnIndex}));
  }
  const handleCheckedBoxClick = (id:string) => {
    dispatch(toggleCheckBox({id, columnIndex}));
  }
  return (
    <ul className={cx('column', {expended: isExpanded})}>
      <li className="title">{titleText}</li>
      {
        filesList.map((item) => ({
          [ItemType.File]: (
            <li className="item" key={item.id}>
                <span onClick={() => handleCheckedBoxClick(item.id)} className="check-box">{item.isChecked ? '✅' : '⬜️'}</span>
                {`📄${item.name}`}
            </li>
          ),
          [ItemType.Folder]: (
            <li className="item" key={item.id}>
              <span onClick={() => handleCheckedBoxClick(item.id)} className="check-box">{selectStatusMap[item.selectStatus as SelectStatus]}</span>
              {`📂${item.name}`}
              <span onClick={() => handleFoldedBoxClick(item.id)} className="fold">{item.isUnfolded ? '➖' : '➕'}</span>
            </li>
          ),
        }[item.type]))
      }
      <li className={cx('more', {hidden: isExpanded || filesList.length < ITEM_LIMITED + 1})}>
        <span onClick={handleBtnClick}>More</span>
      </li>
    </ul>
  );
});