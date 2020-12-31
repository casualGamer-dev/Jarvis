 module.exports.run =async (client, message,args) => {
    const amount = args.join(" ");

    if(!amount) return message.reply('please provide an amount of messages for me to delete')

    if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

    if(amount < 1) return message.reply(`you need to delete at least one message`)

    await message.channel.messages.fetch({limit: amount}).then(messages => {
        message.channel.bulkDelete(messages
)});


message.channel.send('Success!').then (async (msg) =>{
    msg.delete()
})
};


module.exports.help = {
    name: "purge",
    aliases: ["clear","prune","cl","pu"],
    description: "Ping :D",
    usage: "(command name) <no of msgs to be deleted",
    category: "Moderation",
    cooldown: 200 // Counted in MS
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};