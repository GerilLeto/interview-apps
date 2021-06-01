import React, { useEffect } from 'react';
import { ColumnType } from '../../type';
import './index.scss';

export const Column:React.FC<ColumnType[]>  = (
  items,
) => {
  useEffect(() => {

  }, []);

  return (
    <div className="column">
      Column
    </div>
  );
};