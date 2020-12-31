const db = require("quick.db");
module.exports.run =async (client, message) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("you do not have administrator permission")
      }
      
      const user = message.mentions.members.first()
      
      if(!user) {
      return message.channel.send("Please mention the person whose warning you want to reset")
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("Bot are not allowed to have warnings")
      }
      
      if(message.author.id === user.id) {
        return message.channel.send("You are not allowed to reset your warnings")
      }
      
      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
      
      if(warnings === null) {
        return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
      }
      
      db.delete(`warnings_${message.guild.id}_${user.id}`)
      user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
      await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
      
};


module.exports.help = {
    name: "clear warn",
    aliases: ["cw","clwarn"],
    description: "clear the warns :D",
    usage: "(command name) <user>",
    category: "Moderation",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};