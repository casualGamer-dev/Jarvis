const {google} = require('googleapis');

API_KEY = 'AIzaSyDBT9j6-Ks5xuigiiOSJ0p5G6FJPLurCC8';
DISCOVERY_URL =
    'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';
    module.exports = async(message) =>{
if(message.channel.name === "chatbot") return
google.discoverAPI(DISCOVERY_URL)
    .then(client => {
      const analyzeRequest = {
        comment: {
          text: message.content,
        },
        requestedAttributes: {
          TOXICITY: {},
        },
      };

      client.comments.analyze(
          {
            key: API_KEY,
            resource: analyzeRequest,
          },
          async (err, response) => {
            if (err) throw err;
            let rate = response.data.attributeScores.TOXICITY.summaryScore.value
            if(rate > 0.90){
                return message.reply('Stop being toxic')
            }
          });
    })

    }