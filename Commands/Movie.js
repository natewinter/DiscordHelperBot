const fetch = require("node-fetch");
module.exports = {
  name: "movie",
  description: "search for a movie!",
  async execute(message, args) {
    // const search = args.join("+");
    // // let url = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&t=star+wars`;
    // let url = `http://www.omdbapi.com/?i=tt3896198&apikey=452f6357`;
    // //www.omdbapi.com/?i=tt3896198&apikey=452f6357
    // http: axios
    //   .get(url)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function (response) {
    //     message.channel.send(response);
    //   });
    // try {
    //   const response = await axios.get(
    //     "http://www.omdbapi.com/?i=tt3896198&apikey=452f6357"
    //   );
    //   let data = response.data;
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
    // then(function () {
    //   message.channel.send(data);
    // });
    let getMovie = async () => {
      let result = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=452f6357"
      );
      let json = await result.json();
      return json;
    };
    let movie = await getMovie();
    console.log(movie);
    message.channel.send(`Grab some popcorn!
    ${movie.Title}
    ${movie.Year}
    ${movie.Rated}
    ${movie.Released}
    ${movie.Runtime}
    ${movie.Director}
    ${movie.Actors}
    ${movie.Plot}
    ${movie.Awards}
    ${movie.Ratings[0]}
    ${movie.Poster}
    Metascore: ${movie.Metascore}/100
    imdbRating: ${movie.imdbRating}/10.0
    `);
  },
};

// can get json data of movie but no message sent back.