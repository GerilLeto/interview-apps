export interface MCState {
  isExpanded:Boolean,
  firstColumn:ColumnsType,
  secondColumn:ColumnsType,
  thirdColumn:ColumnsType,
  fourthColumn:ColumnsType,
}
export interface ColumnsType {
  folderId:String,
  list:ColumnType[],
}
export enum ItemType {
  File = 'FILE',
  Folder = 'FOLDER'
}
export enum SelectStatus {
  None = 'NONE',
  Pending = 'PENDING',
  Selected = 'SELECTED',
}
export interface ColumnType {
  type:ItemType,
  id:string,
  name:string,
  isChecked?:Boolean, // file only
  isUnfolded?:Boolean, // folder only
  selectStatus?:SelectStatus, // folder only
  children?:ColumnType[],  // folder only
};