import { avaliateMovie } from "../repository/MovieRepository"

class AvaliationMovieService {
  async handle(id: string, score: number) {
    const newScore = await avaliateMovie(id, score);

    return newScore;
  }
}

export default AvaliationMovieService
