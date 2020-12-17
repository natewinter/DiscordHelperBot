const axios = require("axios").default;

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
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=452f6357"
      );
      console.log(response);
      message.channel.send(response);
    } catch (error) {
      console.error(error);
    }
  },
};

// can get json data of movie but no message sent back.
