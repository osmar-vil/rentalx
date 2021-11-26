import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoryRepository: ICategoryRepository) {}

    execute({name, description}: IRequest) {
        const categoryExist = this.categoryRepository.findByName(name);
        if (categoryExist) throw new Error('Category already exists');
        this.categoryRepository.create({name, description});
    }
}

export { CreateCategoryService };