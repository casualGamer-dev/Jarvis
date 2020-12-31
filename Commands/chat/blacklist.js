module.exports.run = (client, message) => {
    var Mentioned = message.mentions.members.first();
    if (!Mentioned) {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setDescription("Please mention a user to blacklist");
        return message.channel.send(ErrorEmbed);
    }
    var Meta = JSON.parse(Fs.readFileSync("../../Training/Meta.json"));
    Meta.blacklisted.push(Mentioned.id);
    Fs.writeFileSync("../../Training/Meta.json", JSON.stringify(Meta));

    let Embed = new Discord.MessageEmbed()
        .setTitle("**SUCCESS**")
        .setDescription("Blacklisted " + Mentioned);
    message.channel.send(Embed);
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
    ownerOnly: true
};