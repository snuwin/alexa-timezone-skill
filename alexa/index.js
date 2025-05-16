const Alexa = require('ask-sdk-core');
const spacetime = require('spacetime');
const informal = require('spacetime-informal');

function getCurrentTime(city) {
    let timeZone = informal.find(city);
    
    if (!timeZone) {
        return `I'm sorry, I couldn't find the time zone for ${city}. Please try another city.`;
    }

    let now = spacetime.now(timeZone);
    return `The current time in ${city} is ${now.time()}.`;
}
// Function to convert time between two cities
function convertTime(cityFrom, cityTo, time) {
    let fromTZ = informal.find(cityFrom);
    let toTZ = informal.find(cityTo);
    
    if (!fromTZ || !toTZ) {
        return `I couldn't find time zone data for ${cityFrom} or ${cityTo}. Please try again.`;
    }

    let fromTime = spacetime(time, fromTZ);
    let toTime = fromTime.goto(toTZ);

    return `If it's ${time} in ${cityFrom}, then it's ${toTime.time()} in ${cityTo}.`;
}
// Alexa Intent Handler for Time Zones
const TimeZoneIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'TimeZoneIntent';
    },

    async handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        let cityFrom = slots.cityFrom?.value || null;
        let cityTo = slots.cityTo?.value || null;
        let time = slots.time?.value || null;
        console.log(`Received Input -> cityFrom: ${cityFrom}, cityTo: ${cityTo}, time: ${time}`);
        if (cityTo && !cityFrom) {
            let responseMessage = getCurrentTime(cityTo);
            return handlerInput.responseBuilder
                .speak(responseMessage)
                .getResponse();
        }
        if (cityFrom && cityTo && time) {
            let responseMessage = convertTime(cityFrom, cityTo, time);
            return handlerInput.responseBuilder
                .speak(responseMessage)
                .getResponse();
        }
        if (cityFrom && cityTo && !time) {
            let currentTime = spacetime.now(informal.find(cityFrom)).time();
            let responseMessage = convertTime(cityFrom, cityTo, currentTime);
            return handlerInput.responseBuilder
                .speak(responseMessage)
                .getResponse();
        }

        if (!cityFrom && !cityTo) {
            return handlerInput.responseBuilder
                .speak("Please provide at least one city.")
                .reprompt("Try asking 'What time is it in Tokyo?' or 'Compare New York and London.'")
                .getResponse();
        }
        return handlerInput.responseBuilder
            .speak("I'm sorry, I couldn't understand your request. Please try again.")
            .reprompt("Try saying 'What time is it in Tokyo?' or 'If it's 3 PM in New York, what time is it in London?'")
            .getResponse();
    }
};

// Alexa Skill Handlers
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = "Welcome to Time Converter! You can ask me the time zone of any city. Try saying 'What time zone is Tokyo in?'";
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt("Try asking, 'What time is it in New York?'")
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        TimeZoneIntentHandler
    )
    .lambda();
