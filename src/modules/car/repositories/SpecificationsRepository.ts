import { ISpecificationsRepository, ICreateSpecificationDTO } from './ISpecificationsRepository';
import { Specification } from '..//model/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
    private _specification: Specification[];

    constructor() {
        this._specification = [];
    }

    create({name, description}: ICreateSpecificationDTO) {
        const specification = new Specification();
        Object.assign(specification, {name, description});
        this._specification.push(specification);
    }

    findByName(name: string): Specification{
        const specification = this._specification.find(spec => spec.name === name);
        if (specification) return specification;
        return null;
    }

    list(): Specification[]{
        return this._specification;
    }
}

export { SpecificationsRepository };