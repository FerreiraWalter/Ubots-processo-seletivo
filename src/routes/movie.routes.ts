import { Router } from 'express';
import ListMoviesController from '../controller/ListMoviesController';
import CreateMovieController from '../controller/CreateMovieController';
import UpdateMovieController from '../controller/UpdateMovieController';
import DeleteMovieController from '../controller/DeleteMovieController';
import AvaliationMovieController from '../controller/AvaliationMovieController';

const movieRoutes = Router();

const listMoviesController = new ListMoviesController();
const createMovieController = new CreateMovieController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();
const avaliationMovieController = new AvaliationMovieController();

movieRoutes.get('/', listMoviesController.execute);
movieRoutes.post('/', createMovieController.execute);
movieRoutes.put('/:id', updateMovieController.execute);
movieRoutes.delete('/:id', deleteMovieController.execute);
movieRoutes.post('/avaliation', avaliationMovieController.execute);

export default movieRoutes;
