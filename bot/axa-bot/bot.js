const { ActivityTypes, CardFactory } = require('botbuilder');
const { Recognizer } = require('./lib');
const trainnlp = require('./train-nlp');
const axios = require('axios');
const cards = require('./Cards/carFormCard')
const card2 = require('./Cards/profile')

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
                console.log(result.intent)
                if(result.intent == "user.contratar"){
                    turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(card2)] });
                }
                
                if(result.intent == "user.coche"){
                    turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(cards)] });
                }

                await turnContext.sendActivity(result.answer);
                if (turnContext.activity.value !== undefined) {
                    console.log(turnContext.activity.value);
                    //turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(cards)] });
                    axios.post('http://localhost:3003/api/coche', turnContext.activity.value)
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
