module.exports.run = (client, message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author.username}, You do not have perms to ban someone`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author.username}, I am do not have perms to ban someone`)
      }
      
      const target = message.mentions.members.first();
      
      if(!target) {
        return message.channel.send(`${message.author.username}, Please mention the person who you want to ban.`)
      }
      
      if(target.id === message.author.id) {
        return message.channel.send(`${message.author.username}, You can not ban yourself!`)
      }
      
     
      
     if(!args[1]) {
       return message.channel.send(`**${message.author.username}**, Please Give Reason To ban Member`)
     }
      
      let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);
      
      message.channel.send(embed)
      target.ban(args[1])
      
};


module.exports.help = {
    name: "ban",
    aliases: ["b"],
    description: "ban ",
    usage: "ban <id of the person> <reason>",
    category: "Moderation",
    cooldown: 10 
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};