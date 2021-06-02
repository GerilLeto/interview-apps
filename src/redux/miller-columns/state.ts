import { MCState, ColumnsType, ItemType, SelectStatus } from './type';
import { uid } from 'uid';
import faker from 'faker';

/**
 * Data Mock
*/

const filesList = [
  {
    type: ItemType.File,
    id: uid(),
    name: faker.system.commonFileName(),
    isChecked: false,
  },
  {
    type: ItemType.File,
    id: uid(),
    name: faker.system.commonFileName(),
    isChecked: false,
  },
];

const folderList1 = [
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
    isUnfolded: false,
    selectStatus: SelectStatus.None,
    children: filesList,
  }
];

const folderList = [
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
    isUnfolded: false,
    selectStatus: SelectStatus.None,
    children: folderList1,
  }
];

// ***

const initialFourthColumn:ColumnsType = {
  folderId: '',
  list: [],
};
const initialThirdColumn:ColumnsType = {
  folderId: '',
  list: [],
};
const initialSecondColumn:ColumnsType = {
  folderId: '',
  list: [],
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
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
    {
      type:ItemType.Folder,
      id: uid(),
      name: faker.lorem.word(),
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
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
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
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
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
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
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
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
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
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
      isUnfolded: false,
      selectStatus: SelectStatus.None,
      children: folderList,
    },
    {
      type: ItemType.File,
      id: uid(),
      name: faker.system.commonFileName(),
      isChecked: false,
    },
  ],
};
export const initialState:MCState = {
  isExpanded: false,
  firstColumn: initialFirstColumn,
  secondColumn: initialSecondColumn,
  thirdColumn: initialThirdColumn,
  fourthColumn: initialFourthColumn,
};

