module.exports = {
  name: "Random",
  description: "Random ",
  execute(message, args) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  },
};
