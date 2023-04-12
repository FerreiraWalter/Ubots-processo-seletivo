import { Request, Response } from 'express';
import CreateMovieService from '../service/CreateMovieService';
import { created, serverError } from '../helpers/HttpHelpers';

class CreateMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { name, description } = httpRequest.body;
  
      const createMovieService = new CreateMovieService();
      const result = await createMovieService.handle({name, description});
  
      return created(httpResponse, result)
    } catch(error) {
      return serverError(httpResponse, {error});
    }
  }
}

export default CreateMovieController;