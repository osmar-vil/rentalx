import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '../repositories/SpecificationsRepository';

interface ICreateDTO {
    name: string;
    description: string;
}

class SpecificationService {
    private repository: ISpecificationsRepository;

    constructor(repository: SpecificationsRepository) {
        this.repository = repository;
    }

    create({name, description}: ICreateDTO){
        this.repository.create({name, description});
    }

    list(){
        return this.repository.list();
    }
}

export { SpecificationService, ICreateDTO };