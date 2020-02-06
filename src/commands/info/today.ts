import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "today",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
        const data= await axios
            .get('http://history.muffinlabs.com/date');
        const events = data.data.data.Events;
        const event = events[Math.floor(Math.random() * events.length)];
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        const embed = new RichEmbed()
            .setColor(roleColor)
            .setURL(data.data.url)
            .setTitle(`Tento den (${data.data.date})...`)
            .setTimestamp()
            .setDescription(`${event.year}: ${event.text}`);
        return message.channel.send(embed).catch(console.error);
    }
}