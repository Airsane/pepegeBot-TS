"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotClient_1 = require("./BotClient");
const express = require('express');
const keepalive = require('express-glitch-keepalive');
const app = express();
app.use(keepalive);
app.get('/', (req, res) => {
    res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
const bot = new BotClient_1.DiscordTs();
bot.start();
