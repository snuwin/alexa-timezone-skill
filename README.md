# alexa-timezone-skill

** Author: Serena Nguyen **
Course: INF133, Winter 2025
> Demo: https://youtu.be/V_N4TG7BjPw 

## Overview
Built an Alexa Skill using AWS Lambda and the Alexa Skills Kit (ASK) that responds to natural language queries about local time and converts between global time zones. Simulated user interactions using the Alexa Developer Console and tested dynamic intent handling via sample utterances. Utilized the spacetime and spacetime-informal NPM packages to parse and format temporal data. Developed and deployed in a serverless environment with custom skill intents and slot resolution.

## Online Resources:
I consulted Alexa Developer Console, Amazon Alexa Skills Kit Documentation, Spacetime NPM package, and spacetime-informal NPM Package, AWS Lambda Documentation, and Stack Overflow.

## How to Run:
-You must enable skill testing in development mode in the Alexa Developer Console.
-The spacetime and spacetime-informal dependencies must be installed in your Lambda function's environment.
** use: npm install **
- Make sure the Alexa skill's interaction model is properly built before testing in the simulator.
- Ensure that you are testing under the correct locale (English - US) if utterances aren't being recognized
