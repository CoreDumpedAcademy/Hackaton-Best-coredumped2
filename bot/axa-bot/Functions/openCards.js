const carFormCard = require('../Cards/carFormCard');
const { CardFactory } = require('botbuilder');

function openCarFormCard(turnContext) {
    turnContext.sendActivity({ attachments: [CardFactory.adaptiveCard(carFormCard)] });
};
