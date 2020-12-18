const fetch = require("node-fetch");
module.exports = {
  name: "movie",
  description: "search for a movie!",
  async execute(message, args) {
    const search = args.join("+");
    // // let url = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&t=star+wars`;
    // let url = `http://www.omdbapi.com/?i=tt3896198&apikey=452f6357`;
    // //www.omdbapi.com/?i=tt3896198&apikey=452f6357
    let getMovie = async () => {
      let result = await fetch(
        `http://www.omdbapi.com/?t=${search}&plot=full&apikey=452f6357`
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

// can get json data of movie but no message sent back.
