import { getMovies } from "../repository/MovieRepository"


class ListMovieService {
  async handle() {
    return await getMovies();
  }
}

export default ListMovieService
