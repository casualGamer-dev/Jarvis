module.exports.run = (client, message) => {

    if (!args[1]) {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setDescription("Specify mode [pattern, response]");
        return message.channel.send(ErrorEmbed);
    }

    if (!["pattern", "response"].includes(args[1])) {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setDescription("mode can only be [pattern, response]");
        return message.channel.send(ErrorEmbed);
    }

    var Meta = JSON.parse(Fs.readFileSync("../../Training/Meta.json"));
    Meta.type = args[1];
    Fs.writeFileSync("../../Training/Meta.json", JSON.stringify(Meta));
    const Embed = new Discord.MessageEmbed()
        .setTitle("**SUCCESS**")
        .setDescription("Successfully changed mode");
    message.channel.send(Embed);

};


module.exports.help = {
    name: "mode",
    aliases: ["m"],
    description: "change the mode of input",
    usage: "(command name)<response or pattern>",
    category: "chat",
    cooldown: 10 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};