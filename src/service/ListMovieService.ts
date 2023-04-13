import { getMovies } from "../repository/MovieRepository"


class ListMovieService {
  async handle(page: number | undefined, perPage: number | undefined) {
    return await getMovies(page, perPage);
  }
}

export default ListMovieService
