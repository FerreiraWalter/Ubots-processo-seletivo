import { deleteMovie } from "../repository/MovieRepository";

class DeleteMovieService {
  async handle(id: string) {
    const deletedMovie = await deleteMovie(id);
    
    return deletedMovie;
  }
}

export default DeleteMovieService;
