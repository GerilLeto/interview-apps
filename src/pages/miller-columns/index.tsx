import React from 'react';
import { Column } from './components/column';
import { ColumnIndex } from './type';
import './index.scss';

 const MillerColumnsApp:React.FC = () => {
  return (
    <div className="miller-columns">
      <div className="content">
        <Column columnIndex={ColumnIndex.FirstColumn} />
        <Column columnIndex={ColumnIndex.SecondColumn} />
        <Column columnIndex={ColumnIndex.ThirdColumn} />
        <Column columnIndex={ColumnIndex.FourthColumn} />
      </div>
    </div>
  );
};

export default MillerColumnsApp;