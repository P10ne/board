import { Inject, Injectable } from '@decorators/di';
import { Column } from '../sequelize/models';
import { ColumnModelToken } from '../InjectionTokens';
import { IBoard, IColumn, IDraftColumn } from '../../../src/CommonTypes';
import ColumnModel from '../sequelize/models/Column';

@Injectable()
class ColumnService {
    constructor(
        @Inject(ColumnModelToken) private columnModel: typeof Column
    ) {}

    async getListByBoardId(boardId: IBoard['id']): Promise<Column[]> {
        return await this.columnModel.findAll({
            where: { boardId }
        });
    }

    async create(column: IDraftColumn): Promise<ColumnModel> {
        return await this.columnModel.create(column);
    }

    async update(column: Partial<IColumn>): Promise<ColumnModel> {
        const columnToUpdate = await this.columnModel.findByPk(column.id);
        return await columnToUpdate.update(column);
    }

    async delete(id: IColumn['id']): Promise<void> {
        const columnToDelete = await this.columnModel.findByPk(id);
        return await columnToDelete.destroy();
    }
}

export default ColumnService;
