import { HttpException } from "../helpers/HttpException";
import { avaliateMovie } from "../repository/MovieRepository"
import { MAX_NUMBER_SCORE, MIN_NUMBER_SCORE } from "../utils/MovieUtils";

class AvaliationMovieService {
  async handle(id: string, score: number) {
    if (score < MIN_NUMBER_SCORE || score > MAX_NUMBER_SCORE) {
      throw new HttpException(400, "Score out of voting limit.")
    }

    const newScore = await avaliateMovie(id, score);

    return newScore;
  }
}

export default AvaliationMovieService
