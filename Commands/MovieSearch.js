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

      let json = await result.json();

      return json;
    };
    let results = await getSearch();
    let array = [];

    // let index = Math.floor(Math.random() * results.length);
    const movieEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${find} `)
      .setURL(`http://www.omdbapi.com/?s=${find}&apikey=${process.env.omdbKey}`)
      .addFields(
        { name: "1", value: `${results.Search[0].Title}`, inline: true },
        { name: "2", value: `${results.Search[1].Title}`, inline: true },
        // { name: "\u200B", value: "\u200B" },
        { name: "3", value: `${results.Search[2].Title}`, inline: true },
        { name: "4", value: `${results.Search[3].Title} `, inline: true },
        { name: "5", value: `${results.Search[4].Title}`, inline: true }
      )
      .setTimestamp()
      .setFooter("Grab some Popcorn!", "https://i.imgur.com/wSTFkRM.png");

    message.channel.send(movieEmbed);
  },
};
