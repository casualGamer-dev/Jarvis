module.exports.run = (client, message,args) => {

 

};


module.exports.help = {
    name: "ping",
    aliases: ["pi"],
    description: "temp mute :D",
    usage: "(command name) <person>  <Time>",
    category: "General",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};