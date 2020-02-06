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
    name: "whois",
    aliases: ["userinfo", "user", "who"],
    category: "info",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        const member = client.getMember(message, args.join(" "));
        const joined = client.formatDate(member.joinedAt);
        const roles = member.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || "none";
        const created = client.formatDate(member.user.createdAt);
        const embed = new discord_js_1.RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
            .addField('Informace o uživateli:', `**> Jméno:** ${member.displayName}
            **> Připojil se:** ${joined}
            **> Role:** ${roles}`, true)
            .addField('Informace o uživateli:', `**> ID:** ${member.user.id}
            **> Username**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Vytvořen**: ${created}`, true)
            .setTimestamp();
        if (member.user.presence.game)
            embed.addField('Momentálně hraje', `**> Název:** ${member.user.presence.game.name}`);
        message.channel.send(embed);
    })
};
