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
    name: "iphonex",
    category: "image",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        let user = message.mentions.users.first() || message.author;
        let msg = yield message.channel.send("Počkejte prosím..");
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = yield axios.get(encodeURI(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${user.displayAvatarURL}`));
        let embed = new discord_js_1.RichEmbed().setColor(roleColor).setImage(data.data.message).setFooter('Provided by nekobot');
        msg.edit(embed);
    })
};
