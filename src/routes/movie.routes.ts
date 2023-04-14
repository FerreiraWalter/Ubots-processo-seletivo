import { Router } from 'express';
import ListMoviesController from '../controller/ListMoviesController';
import CreateMovieController from '../controller/CreateMovieController';
import UpdateMovieController from '../controller/UpdateMovieController';
import DeleteMovieController from '../controller/DeleteMovieController';
import IndicateMovieController from '../controller/IndicateMovieController';
import AvaliationMovieController from '../controller/AvaliationMovieController';
import ListSpecificMovieController from '../controller/ListSpecificMovieController';

const movieRoutes = Router();

const listMoviesController = new ListMoviesController();
const createMovieController = new CreateMovieController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();
const indicateMovieController = new IndicateMovieController();
const avaliationMovieController = new AvaliationMovieController();
const listSpecificMovieController = new ListSpecificMovieController();

movieRoutes.get('/', listMoviesController.execute);
movieRoutes.get('/indicate', indicateMovieController.execute);
movieRoutes.post('/', createMovieController.execute);
movieRoutes.put('/:id', updateMovieController.execute);
movieRoutes.delete('/:id', deleteMovieController.execute);
movieRoutes.get('/:id', listSpecificMovieController.execute);
movieRoutes.post('/avaliation', avaliationMovieController.execute);

export default movieRoutes;
