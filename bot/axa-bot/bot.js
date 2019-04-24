// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
//Importar Adaptive
var AdaptiveCards = require("adaptivecards");
const card = require('./Cards/card');

const { ActivityTypes } = require('botbuilder');

class MyBot {

    /**
     *
     * @param {TurnContext} on turn context object.
     */
    async onTurn(turnContext) {
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        if (turnContext.activity.type === ActivityTypes.Message) {
            await turnContext.sendActivity({ 
                attachments: [ActivityTypes.adaptiveCard(card.card)]  
            });
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;
