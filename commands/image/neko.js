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
    name: "neko",
    category: "image",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        let msg = yield message.channel.send("Počkejte prosím..");
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = yield axios.get('https://nekos.life/api/v2/img/neko');
        let embed = new discord_js_1.RichEmbed().setImage(data.data.url).setTitle(`Nyaaa :heart:`).setFooter('Provided by nekos.life').setColor(roleColor);
        msg.edit(embed);
    })
};
