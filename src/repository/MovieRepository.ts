import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMovies = async () => {
  return await prisma.movie.findMany({
    include: {
      avaliations: {
        select: {
          score: true,
        },
      },
    },
  });
}

export const getSpecificMovie = async (name: string) => {
  const movie = await prisma.movie.findUnique({
    where: {
      name
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

