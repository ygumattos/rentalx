import { Category } from '../entities/Category';

// DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRespository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRespository, ICreateCategoryDTO };
