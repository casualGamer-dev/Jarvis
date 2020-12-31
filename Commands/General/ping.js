module.exports.run = (client, message) => {
    message.channel.send('Loading data').then (async (msg) =>{
        msg.delete()
        message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
      })
};


module.exports.help = {
    name: "ping",
    aliases: ["pi"],
    description: "Ping :D",
    usage: "(command name)",
    category: "General",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};