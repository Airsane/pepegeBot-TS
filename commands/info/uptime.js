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
module.exports = {
    name: "uptime",
    category: "info",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        /* let user = message.mentions.users.first() || message.author;
         let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
         let embed = new RichEmbed().setColor(roleColor).setTitle(`Bot uptime`).addField('Uptime:', moment.duration(client.uptime).format('d [days], h [hours], m [minutes], s [seconds]', { trim: "small" }), true)
 
         message.channel.send(embed);*/
    })
};
