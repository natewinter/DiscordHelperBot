const fetch = require("node-fetch");
const Discord = require("discord.js");
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
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${movie.Title} `)
      .setURL("https://discord.js.org/")
      .setDescription(`${movie.Plot}`)
      .setThumbnail(`${movie.Poster}`)
      .addFields(
        { name: "Director", value: `${movie.Director}`, inline: true },
        { name: "Actors", value: `${movie.Actors}`, inline: true },
        // { name: "\u200B", value: "\u200B" },
        { name: "Runtime", value: `${movie.Runtime}`, inline: true },
        { name: "Rating", value: `${movie.Rated} `, inline: true },
        { name: "Awards", value: `${movie.Awards}`, inline: true },
        { name: "Released", value: `${movie.Released}`, inline: true },
        { name: "Metascore", value: `${movie.Metascore}/100`, inline: true },
        { name: "imdbRating", value: `${movie.imdbRating}/10.0`, inline: true }
      )
      .addField("Boxoffice:", `${movie.BoxOffice}`, true)
      .setTimestamp()
      .setFooter("Grab some Popcorn!", "https://i.imgur.com/wSTFkRM.png");

    message.channel.send(exampleEmbed);
    console.log(movie);
  },
};
