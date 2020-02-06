"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Axios = require("axios");
const axios = Axios.default;
module.exports = {
    name: "today",
    category: "info",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield axios
            .get('http://history.muffinlabs.com/date');
        const events = data.data.data.Events;
        const event = events[Math.floor(Math.random() * events.length)];
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        const embed = new discord_js_1.RichEmbed()
            .setColor(roleColor)
            .setURL(data.data.url)
            .setTitle(`Tento den (${data.data.date})...`)
            .setTimestamp()
            .setDescription(`${event.year}: ${event.text}`);
        return message.channel.send(embed).catch(console.error);
    })
};
