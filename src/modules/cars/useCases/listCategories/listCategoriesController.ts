import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
  handle(req: Request, res: Response): Response {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
    return res.json(listCategoryUseCase.execute());
  }
}

export { ListCategoriesController };
