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
const superagent = require("superagent");
module.exports = {
    name: "achievement",
    category: "image",
    run: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
        if (args.length < 1)
            return;
        let msg = yield message.channel.send("Počkejte prosím..");
        const { body } = yield superagent.get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
            i: 1,
            h: 'Achievement Get!',
            t: args.join(" ")
        });
        message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] });
    })
};
