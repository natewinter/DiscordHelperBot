// require the discord.js module
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
require("dotenv").config();
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command.startsWith(`ping`)) {
    message.channel.send("Pong.");
  } else if (command.startsWith(`beep`)) {
    message.channel.send("Boop.");
  } else if (command.startsWith("gif")) {
    message.channel.send("gif");
  } else if (command === `server`) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  } else if (command === `user-info`) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  }

  // using the new `command` variable, this makes it easier to manage!
  // you can switch your other commands to this format as well
  else if (command === "args-info") {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === "kick") {
    // grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to kick them!");
    }

    const taggedUser = message.mentions.users.first();

    const avatarList = message.mentions.users.map((user) => {
      return `${user.username}'s avatar: <${user.displayAvatarURL({
        format: "png",
        dynamic: true,
      })}>`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
  } else if (command === "prune") {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    }
    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      return message.reply("you need to input a number between 1 and 99.");
    }

    message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send(
        "there was an error trying to prune messages in this channel!"
      );
    });
    // ...
  }
});
// login to Discord with your app's token
client.login(process.env.token);
