import { updateMovie } from "../repository/MovieRepository";


class UpdateMovieService {
  async handle(id: string, newName: string, newDescription: string) {
    const updatedMovie = await updateMovie(id, newName, newDescription);

    return updatedMovie;
  }
}

export default UpdateMovieService;
