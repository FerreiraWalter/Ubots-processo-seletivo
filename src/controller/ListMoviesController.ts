import { Request, Response } from 'express';
import { ok, serverError } from '../helpers/HttpHelpers';
import ListMovieService from '../service/ListMovieService';

class ListMoviesController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { page, perPage } = httpRequest.query;

      const parsedPage = parseInt(page as string);
      const parsedPerPage = parseInt(perPage as string);
  
      if (Number.isNaN(parsedPage) || Number.isNaN(parsedPerPage)) {
        const listMovieService = new ListMovieService();
        const result = await listMovieService.handle();
        return ok(httpResponse, result)
      }

      const listMovieService = new ListMovieService();
      const result = await listMovieService.handle(parseInt(page as string), parseInt(perPage as string));
  
      return ok(httpResponse, result)
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}


export default ListMoviesController