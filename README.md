# alexa-timezone-skill

** Author: Serena Nguyen **
Course: INF133, Winter 2025
> Demo: https://youtu.be/V_N4TG7BjPw 

## Overview
Built an Alexa Skill using AWS Lambda and the Alexa Skills Kit (ASK) that responds to natural language queries about local time and converts between global time zones. Simulated user interactions using the Alexa Developer Console and tested dynamic intent handling via sample utterances. Utilized the spacetime and spacetime-informal NPM packages to parse and format temporal data. Developed and deployed in a serverless environment with custom skill intents and slot resolution.

## Tech Stack
- Node.js (AWS Lambda)
- Alexa Skills Kit (ASK)
- Spacetime NPM packages
- Alexa Developer Console
- Serverless architecture

## Features
- Parse user queries for local and target time zones
- Convert between time zones dynamically
- Handle multiple phrasing variations via utterance mapping
- Simulated interaction testing in development mode

## Online Resources:
I consulted Alexa Developer Console, Amazon Alexa Skills Kit Documentation, Spacetime NPM package, and spacetime-informal NPM Package, AWS Lambda Documentation, and Stack Overflow.

## How to Run:
1. Enable development testing in Alexa Developer Console  
2. Install dependencies:  
   ```bash
   npm install spacetime spacetime-informal
3. Deploy to AWS Lambda and ensure correct region/locale (en-US)
4. Test via the console with utterances like:
- "What time is it in Tokyo?"
- "Convert 2PM PST to India time"
