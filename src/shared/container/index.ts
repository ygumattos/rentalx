import { container } from 'tsyringe';

import { ICategoryRespository } from '../../modules/cars/repositories/ICategoryRespository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoryRespository>(
  'CategoryRespository',
  CategoriesRepository,
);
