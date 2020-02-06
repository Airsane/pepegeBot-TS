import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;


module.exports = {
    name: "advice",
    category: "fun",
    run: async (client: ClientCustom, message: Message, args) => {
        let data = await axios.get("http://api.adviceslip.com/advice");
        message.channel.send(data.data.slip.advice);
    }
}