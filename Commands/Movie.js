const fetch = require("node-fetch");
module.exports = {
  name: "movie",
  description: "search for a movie!",
  async execute(message, args) {
    const search = args.join("+");
    let getMovie = async () => {
      let result = await fetch(
        `http://www.omdbapi.com/?t=${search}&plot=full&apikey=${process.env.omdbKey}`
      );
      let json = await result.json();
      return json;
    };
    let movie = await getMovie();
    console.log(movie);
    message.channel.send(`Grab some popcorn!
    ${movie.Title} 
    Rated: ${movie.Rated} 
    Released: ${movie.Released}
    Director: ${movie.Director}
    Runtime: ${movie.Runtime}
    Plot: ${movie.Plot}
    Actors: ${movie.Actors}
    Awards: ${movie.Awards}
    Metascore: ${movie.Metascore}/100
    imdbRating: ${movie.imdbRating}/10.0
    ${movie.Poster}
    `);
  },
};

// need to look into how to turn this into card so it isnt a message.
