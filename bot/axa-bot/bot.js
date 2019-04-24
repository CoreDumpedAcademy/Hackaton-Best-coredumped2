// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const card = require('./Cards/carFormcard');
const { ActivityTypes, CardFactory } = require('botbuilder');

class MyBot {
    /**
     *
     * @param {TurnContext} on turn context object.
     */
    async onTurn(turnContext) {
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        if (turnContext.activity.type === ActivityTypes.Message) {
            await turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(card)] });
            if (turnContext.activity.value !== undefined) {
                console.log('meter una llamada http');
            }
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;
