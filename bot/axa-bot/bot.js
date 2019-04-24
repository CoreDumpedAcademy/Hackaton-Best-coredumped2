const { ActivityTypes } = require('botbuilder');
const { Recognizer } = require('./lib');
const trainnlp = require('./train-nlp');
const axios = require('axios');

class MyBot {
    constructor() {
        this.recognizer = new Recognizer();
        this.recognizer.nlpManager.addLanguage('en');
        trainnlp(this.recognizer.nlpManager, console.log);
    }

    async onTurn(turnContext) {
        if (turnContext.activity.type === ActivityTypes.Message) {
            try {
                const result = await this.recognizer.recognize(turnContext);
                await turnContext.sendActivity(result.answer);
                if (turnContext.activity.value !== undefined) {
                    console.log(turnContext.activity.value);
                    //turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(cards)] });
                    axios.post('http://localhost:3003/coche', turnContext.activity.value)
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            } catch (ex) {
                await turnContext.sendActivity('Opps! there was an error recognizing!');
            }
        }
    }
}

module.exports = MyBot;
