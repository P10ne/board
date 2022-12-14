import { Instance, types } from 'mobx-state-tree';
import Board, { TBoardModel, TBoardStore } from './Board';
import { TBoardColumnModel, TBoardColumnStore } from './BoardColumn';
import { TBoardCardModel, TBoardCardStore } from './BoardCard';
import { TBoardColumnsStore } from './BoardColumns';

const RootStore = types.model('RootStore', {
    board: Board
});

type TRootStore = Instance<typeof RootStore>;

export default RootStore;

export type {
    TRootStore,
    TBoardModel,
    TBoardStore,
    TBoardColumnModel,
    TBoardColumnStore,
    TBoardCardModel,
    TBoardCardStore,
    TBoardColumnsStore
}
