import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationRouter } from './routes/Specifications.route';

const app = express();

app.use(express.json());
app.use('/categories',categoriesRoutes);
app.use('/specification',specificationRouter);

app.listen(3333, () => {console.log('server is running')});