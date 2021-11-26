import { Category } from '../model/Category';

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

interface ICategoryRepository {
    create({description, name} : ICreateCategoryDTO): void
    list(): Category[]
    findByName(name: string): Category
}

export { ICategoryRepository, ICreateCategoryDTO };