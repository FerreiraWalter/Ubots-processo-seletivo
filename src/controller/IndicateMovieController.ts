import { Request, Response } from "express";
import { ok, serverError } from "../helpers/HttpHelpers";
import IndicateMovieService from "../service/IndicateMovieService";

class IndicateMovieController {
  async execute(httpRequest: Request, httpResponse: Response) {
    try {
      const indicateMovieService = new IndicateMovieService();
      const result = await indicateMovieService.handle();

      return ok(httpResponse, result)
    } catch (error) {
      return serverError(httpResponse, {error})
    }
  }
}

export default IndicateMovieController;
