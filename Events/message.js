const Command = require("../Src/Handlers/CommandHandler");
const conf = require("../Settings/conf.json");
const Session = require("../Training/Session.js");
const use = require("@tensorflow-models/universal-sentence-encoder");
const tf = require("@tensorflow/tfjs-node");
const JW = require("../Training/JaroWinkler.js");

const Message = async(client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.indexOf(conf.Discord.prefix) !== 0) return;
    if (!message.content.startsWith(conf.Discord.prefix)) return;

    const args = message.content.slice(conf.Discord.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    Command.trigger(client, message, args, cmd);
    
    const tox = require('../toxication')
    tox(message)
    if (message.channel.name === 'chatbot'&&message.author.id != client.user.id||message.channel.id === '784635225962577990'&&message.author.id != client.user.id) {
        args = message.content.slice().trim().split(/ +/g);
    var model = Session.getModel();
    if (!model) {
        model = await tf.loadLayersModel("file:///home/container/TextAI/model.json");
    
        Session.addModel(model);
    }
        let phrase = args.slice(0 ).join(" ")
    
        message.channel.startTyping();
        const sentenceEncoder = await use.load();
    var Data = [{ message: phrase }];
    var Sentences = Data.map(t => t.message.toLowerCase());
    const xPredict = await sentenceEncoder.embed(Sentences);
    var prediction = await model.predict(xPredict).data();
    var highest = [0, 0];
    for (let i = 0; i < prediction.length; ++i) {
        if (highest[1] < prediction[i]) {
            highest[0] = i;
            highest[1] = prediction[i];
        }
    }
    var predicted = "";
    switch (highest[0]) {
        case 0:
            predicted = "Greeting";
            break;
        case 1:
            predicted = "Goodbye";
            break;
        case 2:
            predicted = "Insult";
            break;
        case 3:
            predicted = "Compliment";
            break;
    }

    var Dataset = JSON.parse(Fs.readFileSync("./Convo/Dataset.json"));
    var input = [undefined, 0];

    Dataset[predicted.toLowerCase()].patterns.forEach(msg => {
        var weight = JW(phrase, msg);
        if (weight > input[1]) {
            input[0] = msg;
            input[1] = weight;
        }
    });

    var possibleResponses = [];
    if (input[1] > 0.5) {
        Dataset[predicted.toLowerCase()].responses.forEach(res => {
            if (res.question == input[0]) {
                possibleResponses.push(res.message);
            }
        });
    }
    if (possibleResponses.length == 0) {
        Dataset[predicted.toLowerCase()].responses.forEach(res => {
            if (res.question == "DEFAULT") {
                possibleResponses.push(res.message);
            }
        })
    }
    message.channel.stopTyping();
    message.channel.send(`**> Replying to ${message.member.user.username}** \n` + possibleResponses[Math.floor(Math.random() * possibleResponses.length)])

    var Meta = JSON.parse(Fs.readFileSync("./Training/Meta.json"));
    if (Meta.selflearning && highest[1] > 0.6) {
        if (Dataset[predicted.toLowerCase()].patterns.includes(phrase)) return;
        Dataset[predicted.toLowerCase()].patterns.push(phrase);
        Fs.writeFileSync("./Convo/Dataset.json", JSON.stringify(Dataset));
    }
    
    }
     message.channel.stopTyping();
     
};

module.exports.init = Message;