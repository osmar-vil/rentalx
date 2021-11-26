import { Specification } from "../model/Specification";

interface ISpecificationCreateDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({name, description} : ISpecificationCreateDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ISpecificationsRepository, ISpecificationCreateDTO };