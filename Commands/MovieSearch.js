const fetch = require("node-fetch");
const Discord = require("discord.js");
module.exports = {
  name: "search",
  description: "search for movies!",
  async execute(message, args) {
    const find = args.join("+");
    let getSearch = async () => {
      let result = await fetch(
        `http://www.omdbapi.com/?s=${find}&apikey=${process.env.omdbKey}`
      );
      console.log(
        result,
        "========================================================"
      );
      let json = await result.json();

      return json;
    };
    let results = await getSearch();
    console.log(results);
    message.channel.send(results);
  },
};
