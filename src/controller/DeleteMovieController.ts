import { Request, Response } from 'express';
import DeleteMovieService from '../service/DeleteMovieService';
import { ok, serverError } from '../helpers/HttpHelpers';

class DeleteMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { id } = httpRequest.params;

      const deleteMovieService = new DeleteMovieService();
      const result = await deleteMovieService.handle(id);
  
      return ok(httpResponse, result)
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}


export default DeleteMovieController;