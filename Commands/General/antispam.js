module.exports.run = (client, message,args) => {
    if(message.member.hasPermission==="MANAGE_SERVER"){
        if (message==="True"||message==="false"){
        db.set(`antispam_${message.guild.id}`, `${args}`)
         }
         else{
             message.channel.send("antispam can be true or false only")
         }
         
    }
    else{
        message.channel.send("you do not have enough permission")
    }
};


module.exports.help = {
    name: "antispam",
    aliases: ["as"],
    description: "antispam :D",
    usage: "(command name)",
    category: "General",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};