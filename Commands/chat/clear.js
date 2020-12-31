const Discord = require("discord.js");
const Fs = require("fs")
module.exports.run = (client, message,args) => {
    if (args[1] != "confirm") {
        return message.channel.send(
            "Please type confirm as the first argument to clear dataset."
        );
    }

    Fs.writeFileSync("../../Convo/Dataset.json", JSON.stringify({
        "greeting": {
            "patterns": [],
            "responses": []
        },
        "goodbye": {
            "patterns": [],
            "responses": []
        },
        "insult": {
            "patterns": [],
            "responses": []
        },
        "compliment": {
            "patterns": [],
            "responses": []
        }
    }));
    Fs.writeFileSync(
        "../../Convo/Stats.json",
        JSON.stringify({
            "greeting": 0,
            "goodbye": 0,
            "insult": 0,
            "compliment": 0,
            "users": {}
        })
    );

    const Embed = new Discord.MessageEmbed()
        .setTitle("**SUCCESS**")
        .setDescription("Data has been wiped");
    message.channel.send(Embed);
};


module.exports.help = {
    name: "cleardatasets",
    aliases: ["cd"],
    description: "cd :D",
    usage: "(command name)",
    category: "chat",
    cooldown: 1000 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: true
};