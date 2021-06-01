export interface MCState {
  first:ColumnsType,
  second:ColumnsType,
  third:ColumnsType,
  fourth:ColumnsType,
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
export interface FileType {
  type:ItemType.File,
  id:String,
  name:String,
  isChecked:Boolean,
}
export interface FolderType {
  type:ItemType.Folder,
  id:String,
  name:String,
  isUnfold:Boolean,
  selectStatus:SelectStatus,
  children?:ColumnType[],
}
export type ColumnType = FileType|FolderType;