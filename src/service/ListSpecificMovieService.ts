import { getSpecificMovie } from "../repository/MovieRepository";

class ListSpecificMovieService {
  async handle(id: string) {
    return await getSpecificMovie(id);
  }
}

export default ListSpecificMovieService;

