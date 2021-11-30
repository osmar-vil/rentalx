import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '../repositories/SpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class SpecificationService {
    private repository: ISpecificationsRepository;

    constructor(repository: SpecificationsRepository) {
        this.repository = repository;
    }

    create({name, description}: IRequest): void{
        const specificationExists = this.repository.findByName(name);
        if (specificationExists) throw new Error('Specification already exists');
        this.repository.create({name, description});
    }
}

export { SpecificationService, IRequest };