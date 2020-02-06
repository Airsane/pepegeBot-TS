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
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send("Musíte být administrátor!");
        if (message.deletable)
            message.delete();
        if (args.length < 1)
            return message.reply('Musíš napsat text.').then((m) => m.delete(5000));
        if (args[0].toLowerCase() === "embed") {
            let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
            const embed = new discord_js_1.RichEmbed().setColor(roleColor).setDescription(args.slice(1).join(" ")).setTimestamp().setAuthor(message.author.username, message.author.displayAvatarURL).setFooter(client.user.username, client.user.displayAvatarURL);
            message.channel.send(embed);
        }
        else {
            message.channel.send(args.join(" "));
        }
    })
};
