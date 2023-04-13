import { Request, Response } from 'express';
import AvaliationMovieService from '../service/AvaliationMovieService';
import { created, serverError } from '../helpers/HttpHelpers';

class AvaliationMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    const { id, score } = httpRequest.body;

    const avaliationMovieService = new AvaliationMovieService();
    const result = await avaliationMovieService.handle(id, score);

    return created(httpResponse, result);
  }
}

export default AvaliationMovieController;
