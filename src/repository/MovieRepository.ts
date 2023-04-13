import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMovies = async (page: number = 0, perPage: number = 5) => {
  return await prisma.movie.findMany({
    include: {
      avaliations: {
        select: {
          score: true,
        },
      },
    },
    skip: page * perPage,
    take: perPage,
  });
}

export const getSpecificMovie = async (id: string) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id
    },
    include: {
      avaliations: true,
    },
  });

  return movie;
}

export const setMovie = async (name: string, description: string) => {
  const createdMovie = await prisma.movie.create({
    data: {
      name,
      description,
    },
  });

  return createdMovie;
}

export const updateMovie = async (id: string, newName: string, newDescription: string) => {
  const movie = await prisma.movie.update({
    where: {
      id,
    },
    data: {
      name: newName,
      description: newDescription,
    }
  })

  return movie;
}

export const deleteMovie = async (id: string) => {
  const movie = await prisma.movie.delete({
    where: {
      id,
    }
  })

  return movie;
}

export const avaliateMovie = async (id: string, score: number) => {
  const movie = await prisma.avaliation.create({
    data: {
      movieId: id,
      score: score,
    }
  })

  return movie;
}

export const getSpecificMovieNotEvaluated = async () => {
  const movie = await prisma.movie.findFirst({
    where: {
      NOT: {
        avaliations: {
          some: {
            score: undefined
          }
        }
      }
    }
  });

  return movie;
}

