import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "chat",
    category: "fun",
    run: async (client: ClientCustom, message: Message, args) => {
        let name = encodeURIComponent(args.join(" ").trim());
        const response = await axios.get('https://www.karelbot.cz/karel/question.php?question=' + name);
        message.reply(response.data.split(';')[1]);
    }
}