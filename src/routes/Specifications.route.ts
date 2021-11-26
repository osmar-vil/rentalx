import { request, Router } from 'express';

import { SpecificationService } from '../modules/car/services/SpecificationService';
import { SpecificationsRepository } from '../modules/car/repositories/SpecificationsRepository';

const specificationRouter = Router();
const specificationRepository = new SpecificationsRepository();

specificationRouter.get('/', (request, response) => {
    const list = specificationRepository.list();
    return response.json(list);
});

specificationRouter.post('/', (request, response) => {
    const {name, description} = request.body;
    const specification = new SpecificationService(specificationRepository);
    specification.create({name, description});
    return response.status(201).send();
})

export {specificationRouter};