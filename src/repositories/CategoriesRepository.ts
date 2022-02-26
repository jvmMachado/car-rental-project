import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);
  }
}

export { CategoriesRepository };
