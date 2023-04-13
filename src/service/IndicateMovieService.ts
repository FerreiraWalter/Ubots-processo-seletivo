import { getSpecificMovieNotEvaluated } from "../repository/MovieRepository";

class IndicateMovieService {
  async handle() {
    const movieNotEvaluated = await getSpecificMovieNotEvaluated();

    return movieNotEvaluated;
  }
}

export default IndicateMovieService;
