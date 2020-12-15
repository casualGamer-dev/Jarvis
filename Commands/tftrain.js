const Discord = require("discord.js");
const trainAI = require("../Training/trainAI.js");
const Session = require("../Training/Session.js");

module.exports = {
    names: ["tftrain"],
    async execute(Env) {
        const message = Env.message;

        if (message.author.id != "682229927864696835"&&essage.author.id != "683343114865606686") {
            const ErrorEmbed = new Discord.MessageEmbed()
                .setTitle("**Insufficient Permission**")
                .setDescription("No");
            return message.channel.send(ErrorEmbed);
        }
        message.channel.send("Please wait... Model is being trained");
        var Model = await trainAI();
        Model.save("file:///root/Learner/TextAI/");
        Session.addModel(Model);
        message.channel.send("AI Succcessfully trained");
    }
}