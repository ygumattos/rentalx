import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    return res.json(this.listCategoryUseCase.execute());
  }
}

export { ListCategoriesController };
