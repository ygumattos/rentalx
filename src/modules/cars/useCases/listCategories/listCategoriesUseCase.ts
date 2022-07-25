import { Category } from '../../model/Category';
import { ICategoryRespository } from '../../repositories/ICategoryRespository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRespository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
