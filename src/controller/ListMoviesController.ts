import { Request, Response } from 'express';
import { ok, serverError } from '../helpers/HttpHelpers';
import ListMovieService from '../service/ListMovieService';

class ListMoviesController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const listMovieService = new ListMovieService();
      const result = await listMovieService.handle();
  
      return ok(httpResponse, result)
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}


export default ListMoviesController