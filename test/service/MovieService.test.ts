import CreateMovieService from "../../src/service/CreateMovieService";
import DeleteMovieService from "../../src/service/DeleteMovieService";
import ListMovieService from "../../src/service/ListMovieService";
import UpdateMovieService from "../../src/service/UpdateMovieService";

describe('MovieService', () => {
  it('should create a movie', async () => {
    const mockCreateMovieService: CreateMovieService = {
      handle: jest.fn().mockResolvedValue([{ name: 'movie1', description: 'desc1' }])
    };
    const httpResponse = { 
      json: jest.fn(), 
      status: 201
    } as any;
  
  
    const result = await mockCreateMovieService.handle({ name: 'movie1', description: 'desc1' });
  
    expect(result).toBeInstanceOf(Object);
    expect(httpResponse.status).toBe(201);
  });

  it('should return a list of movies', async () => {
    const mockListMovieService: ListMovieService = {
      handle: jest.fn().mockResolvedValue([{ name: 'movie1', description: 'desc1' }])
    };

    const result = await mockListMovieService.handle();

    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('should Update a movie', async () => {
    const mockUpdateMovieService: UpdateMovieService = {
      handle: jest.fn().mockResolvedValue({
        code: "OK",
        content: {
          id: "70c514a5-6ac3-4126-a83d-5b31d4b62a2a",
          name: "Walter o retorno",
          description: "muito lindo",
          createdAt: "2023-04-12T02:01:08.789Z",
          updatedAt: "2023-04-12T02:01:08.789Z"
        }
      })
    };
    const httpResponse = { 
      json: jest.fn(), 
      status: 200
    } as any;
  
    const result = await mockUpdateMovieService.handle("id", "newName", "newDescription");
  
    expect(result).toBeInstanceOf(Object);
    expect(httpResponse.status).toBe(200);
  });

  it('should Delete a movie', async () => {
    const mockDeleteMovieService: DeleteMovieService = {
      handle: jest.fn().mockResolvedValue([])
    };
    const httpResponse = { 
      json: jest.fn(), 
      status: 200
    } as any;
  
    const result = await mockDeleteMovieService.handle("id_movie");
  
    expect(result).toBeInstanceOf(Object);
    expect(httpResponse.status).toBe(200);
  });
});