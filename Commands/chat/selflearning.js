module.exports.run = (client, message) => {
    var Meta = JSON.parse(Fs.readFileSync("../../Training/Meta.json"));
    Meta.selflearning = !Meta.selflearning;
    Fs.writeFileSync("../../Training/Meta.json", JSON.stringify(Meta));

    if (Meta.selflearning) {
        let Embed = new Discord.MessageEmbed()
            .setTitle("**SUCCESS**")
            .setDescription("Self learning mode has been enabled");
        message.channel.send(Embed);
    } else {
        let Embed = new Discord.MessageEmbed()
            .setTitle("**SUCCESS**")
            .setDescription("Self learning mode has been disabled");
        message.channel.send(Embed);
    }
};


module.exports.help = {
    name: "selflearning",
    aliases: ["sfl"],
    description: "selflearning oh yea baby its machine learning time",
    usage: "(command name)",
    category: "chat",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: true
};