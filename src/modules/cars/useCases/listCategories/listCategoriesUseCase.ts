import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoryRespository } from '../../repositories/ICategoryRespository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRespository')
    private categoriesRepository: ICategoryRespository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
