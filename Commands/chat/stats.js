const Discord = require("discord.js");
const Fs = require("fs");
module.exports.run = (client, message) => {

    var Data = JSON.parse(Fs.readFileSync("../../Convo/Stats.json"));
    var DataStr = `Greetings - ${Data.greeting}\nGoodbyes - ${Data.goodbye}\nInsults - ${Data.insult}\nCompliments - ${Data.compliment}`;
    var Embed = new Discord.MessageEmbed()
        .setTitle("**DATASET**")
        .setDescription(DataStr);
    message.channel.send(Embed);
};


module.exports.help = {
    name: "stats",
    aliases: ["st"],
    description: "stats",
    usage: "(command name)",
    category: "chat",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};