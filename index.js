const { Client, Intents } = require("discord.js");
const Events = require("./Src/Handlers/EventHandler");
const conf = require("./Settings/conf.json");
const { decodeBmp } = require("@tensorflow/tfjs-node/dist/image");

console.clear();

const client = new Client({
 
});


client.on("ready", () => Events.ready.init(client));
client.on("message", (message) => Events.message.init(client, message));
client.on("message", async message => {
    if (message.author.bot) return; 
    const antispam= db.get(`antispam_${message}`)

    if(antispam==="true"){}
    if(is_url(message.content) === true && !message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
        return message.channel.send("You can not send link here ")
      }
})
client.login(conf.Discord.token);