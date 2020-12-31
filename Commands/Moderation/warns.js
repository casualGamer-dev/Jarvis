const db = require("quick.db")
module.exports.run =async (client, message,args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    const commandsembed = {
        color: 0x00ffff,
        title: `total warns!`,
        description: `${user} have **${warnings}** warning(s)`,
        fields: []
    }
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(commandsembed)
};


module.exports.help = {
    name: "warns",
    aliases: ["warns"],
    description: "warn :D",
    usage: "(command name)",
    category: "Moderation",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};

