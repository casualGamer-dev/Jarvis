const Discord = require("discord.js");
const trainAI = require("../../Training/trainAI.js");
const Session = require("../../Training/Session.js");
module.exports.run = async (client, message) => {
    
    message.channel.send("Please wait... Model is being trained");
    var Model = await trainAI();
    Model.save("file:///home/container/TextAI");
    Session.addModel(Model);
    message.channel.send("AI Succcessfully trained");
};


module.exports.help = {
    name: "tftrain",
    aliases: ["tf"],
    description: "tf",
    usage: "tftrain",
    category: "chat",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: true
};