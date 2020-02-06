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
    name: "clear",
    aliases: ["purge"],
    category: "moderation",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send("Musíš být administrátor!");
        let amount = args[0];
        if (!amount || isNaN(amount) || parseInt(amount) < 1) {
            return message.channel.send("Musíte zadat číslo!");
        }
        yield message.delete();
        let user = message.mentions.users.first();
        let messages = yield message.channel.fetchMessages({ limit: 100 });
        let messagesArr = messages.array();
        if (user) {
            messages = messages.filter((m) => m.author.id === user.id);
        }
        if (messagesArr.length > amount) {
            messagesArr.length = parseInt(amount, 10);
        }
        messagesArr = messagesArr.filter((m) => !m.pinned);
        amount++;
        message.channel.bulkDelete(messagesArr, true);
        let toDelete = null;
        if (user) {
            toDelete = yield message.channel.send("Vymazáno " + amount + " zpráv uživatele " + user);
        }
        else {
            toDelete = yield message.channel.send("Vymazáno " + amount + " zpráv");
        }
        setTimeout(function () {
            toDelete.delete();
        }, 2000);
    })
};
