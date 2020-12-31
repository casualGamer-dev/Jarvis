module.exports.run = (client, message) => {
    if(message.member.hasPermission==="MANAGE_SERVER"){
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is setted as ${channel}`)
}
};


module.exports.help = {
    name: "setwelcome",
    aliases: ["pi"],
    description: "setwelcome :D",
    usage: "(command name)",
    category: "General",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};