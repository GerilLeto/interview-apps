export enum Type {
  file = 'FILE',
  folder = 'FOLDER'
}
export interface ColumnType {
  type: Type,
  isChecked: Boolean,
  children: ColumnType[],
}