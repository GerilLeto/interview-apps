import { MCState, ColumnsType, ItemType, SelectStatus } from './type';
import { uid } from 'uid';
import faker from 'faker';

const initialFourthColumn:ColumnsType = {
  folderId: '',
  list: [
    {
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
    {
      type:ItemType.Folder,
      id: uid(),
      name: faker.lorem.word(),
      isUnfold: false,
      selectStatus: SelectStatus.None,
    }
  ],
};
const initialThirdColumn:ColumnsType = {
  folderId: '',
  list: [
    {
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
    {
      type:ItemType.Folder,
      id: uid(),
      name: faker.lorem.word(),
      isUnfold: false,
      selectStatus: SelectStatus.None,
      children: initialFourthColumn.list,
    }
  ],
};
const initialSecondColumn:ColumnsType = {
  folderId: '',
  list: [
    {
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
    {
      type:ItemType.Folder,
      id: uid(),
      name: faker.lorem.word(),
      isUnfold: false,
      selectStatus: SelectStatus.None,
      children: initialThirdColumn.list,
    }
  ],
};
const initialFirstColumn:ColumnsType = {
  folderId: '',
  list: [
    {
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
    {
      type:ItemType.Folder,
      id: uid(),
      name: faker.lorem.word(),
      isUnfold: false,
      selectStatus: SelectStatus.None,
      children: initialSecondColumn.list,
    }
  ],
};
export const initialState:MCState = {
  first: initialFirstColumn,
  second: initialSecondColumn,
  third: initialThirdColumn,
  fourth: initialFourthColumn,
};

