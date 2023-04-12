import { Request, Response } from 'express';
import UpdateMovieService from '../service/UpdateMovieService';
import { ok, serverError } from '../helpers/HttpHelpers';

class UpdateMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { id } = httpRequest.params;
      const { name, description } = httpRequest.body;
  
      const updateMovieService = new UpdateMovieService();
      const result = await updateMovieService.handle(id, name, description);
  
      return ok(httpResponse, result);
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}


export default UpdateMovieController;