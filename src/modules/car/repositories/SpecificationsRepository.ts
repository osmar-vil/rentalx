import { ISpecificationsRepository, ISpecificationCreateDTO } from './ISpecificationsRepository';
import { Specification } from '..//model/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
    private _specification: Specification[];

    constructor() {
        this._specification = [];
    }

    create({name, description}: ISpecificationCreateDTO) {
        const specification = new Specification();
        Object.assign(specification, {name, description});
        this._specification.push(specification);
    }

    findByName(name: string){
        return null;
    }

    list(): Specification[] {
        return this._specification;
    }
}

export { SpecificationsRepository };