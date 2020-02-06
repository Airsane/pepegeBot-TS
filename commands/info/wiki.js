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
const snekfetch = require('snekfetch');
module.exports = {
    name: "wiki",
    category: "info",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        const query = args.join(' ');
        const { body } = yield snekfetch
            .get('https://cs.wikipedia.org/w/api.php')
            .query({
            action: 'query',
            prop: 'extracts',
            format: 'json',
            titles: query,
            exintro: '',
            explaintext: '',
            redirects: '',
            formatversion: 2
        });
        if (body.query.pages[0].missing)
            return message.channel.send('Nic nenalezeno');
        let user = message.mentions.users.first() || message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let embed = new discord_js_1.RichEmbed().setColor(roleColor).setTitle(body.query.pages[0].title)
            .setAuthor('Wikipedia', 'https://i.imgur.com/a4eeEhh.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        message.channel.send(embed);
    })
};
