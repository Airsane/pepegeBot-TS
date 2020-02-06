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
module.exports = {
    name: "help",
    category: "info",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let commands = client.commands;
        let embed = new discord_js_1.RichEmbed().setTitle(":keyboard: Seznam všech příkazů").setColor(roleColor);
        let arr = commands.array();
        embed.addField("Info", arr.filter(a => a.category == "info").map(n => '`' + n.name + '`').toString());
        embed.addField("Image", arr.filter(a => a.category == "image").map(n => '`' + n.name + '`').toString());
        embed.addField("Fun", arr.filter(a => a.category == "fun").map(n => '`' + n.name + '`').toString());
        embed.addField("Moderation", arr.filter(a => a.category == "moderation").map(n => '`' + n.name + '`').toString());
        message.channel.send(embed);
    })
};
