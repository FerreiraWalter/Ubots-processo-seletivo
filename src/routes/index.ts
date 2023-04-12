import { Router } from 'express';
import movieRoutes from './movie.routes';

const routes = Router();

routes.use("/movie", movieRoutes);

export default routes;