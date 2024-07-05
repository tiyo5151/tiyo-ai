import type { LoadingWorkEntity } from 'api/@types/work';
import { transaction } from 'service/prismaClient';
import { workMethod } from '../model/workMethod';
import { workCommand } from '../repository/workcommand';

export const workUseCase = {
  create: (novelUrl: string, title: string, author: string): Promise<LoadingWorkEntity> =>
    transaction('RepeatableRead', async (tx) => {
      const loadingWork = workMethod.create({ novelUrl, title, author });
      await workCommand.save(tx, loadingWork);
      return loadingWork;
    }),
};
