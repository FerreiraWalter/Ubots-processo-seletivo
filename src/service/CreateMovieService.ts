import { HttpException } from "../helpers/HttpException";
import { getSpecificMovieByName, setMovie } from "../repository/MovieRepository";


interface IMovieRequest {
  name: string;
  description: string;
}

class CreateMovieService {
  async handle({name, description}: IMovieRequest) {
    const movieAlreadyExists = await getSpecificMovieByName(name);

    if (movieAlreadyExists) {
      throw new HttpException(400, "Movie already exists.");
    }

    const movie = await setMovie(name, description);
    return movie;
  }
}


export default CreateMovieService;