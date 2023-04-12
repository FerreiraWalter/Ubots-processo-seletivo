import { Request, Response } from 'express';
import AvaliationMovieService from '../service/AvaliationMovieService';
import { created, serverError } from '../helpers/HttpHelpers';

class AvaliationMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { id, score } = httpRequest.body;

      const avaliationMovieService = new AvaliationMovieService();
      const result = await avaliationMovieService.handle(id, score);
  
      console.log("result", result)

      return created(httpResponse, result);
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}

export default AvaliationMovieController;
