import { Category } from '../../model/Category';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
