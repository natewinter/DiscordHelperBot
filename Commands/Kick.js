module.exports = {
  name: "kick",
  description: "kicks users!",
  guildOnly: true,
  execute(message, args) {
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
  },
};
