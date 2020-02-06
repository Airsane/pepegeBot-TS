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
    name: "tickle",
    category: "fun",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        let user = message.mentions.users.first();
        let author = message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = yield axios.get('https://nekos.life/api/v2/img/tickle');
        const embed = new discord_js_1.RichEmbed().setColor(roleColor).setImage(data.data.url).setDescription(` Hehe ${user}, \`${author.username}\` tě polechtal/a `).setFooter('Provided by nekos.life');
        message.channel.send(embed);
    })
};
