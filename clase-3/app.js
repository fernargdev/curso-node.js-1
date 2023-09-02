const express = require("express"); // require => commonJS
const crypto = require("node:crypto"); // uuid v4
const cors = require("cors");

const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./schemas/movies");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = ["http://localhost:8080", "https://movies.com"];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

// Métodos normales  : GET/HEAD/POST
// Métodos complejos : PUT/PATCH/DELETE
// CORS PRE-Flight => OPTIONS

// Todos los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {
  // const origin = req.header("origin");
  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   res.header("Access-Control-Allow-Origin", origin);
  // }

  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );

    return res.json(filteredMovies);
  }

  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  // path-to-regexp
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);

  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not Found" });
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  // Esto no seria REST, porque estamos guardando
  // el estado de la aplicacion en memoria
  movies.push(newMovie);

  res.status(201).json(newMovie); // actualizar la cache del cliente
});

app.delete("/movies/:id", (req, res) => {
  // const origin = req.header("origin");
  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   res.header("Access-Control-Allow-Origin", origin);
  // }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: "Movie deleted" });
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

// app.options("/movies/:id", (req, res) => {
//   const origin = req.header("origin");

//   if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//     res.header("Access-Control-Allow-Origin", origin);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   }

//   res.sendStatus(200);
// });

// const PORT = process.env.PORT ?? 3000     // problemas con las env
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
