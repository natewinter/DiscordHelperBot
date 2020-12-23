const fetch = require("node-fetch");

module.exports = {
  name: "gif",
  description: "search for a gif!",
  async execute(message, args) {
    const search = args.join("-");
    let url = `https://api.tenor.com/v1/search?q=${search}&key=${process.env.tenorKey}&limit=8&contentfilter=off`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(search, url, json);

    message.channel.send(`${search} URL: ${url}`, json.results[index].url);
    let index = Math.floor(Math.random() * json.results.length);
    message.channel.send(json.results[index].url);
  },
};
