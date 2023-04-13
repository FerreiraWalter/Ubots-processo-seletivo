import { Request, Response } from "express";
import ListSpecificMovieService from "../service/ListSpecificMovieService";
import { ok, serverError } from "../helpers/HttpHelpers";

class ListSpecificMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const { id } = httpRequest.params;

      const listSpecificMovieService = new ListSpecificMovieService();
      const result = await listSpecificMovieService.handle(id);
  
      return ok(httpResponse, result);
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}

export default ListSpecificMovieController;
