import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "cuddle",
    category:"fun",
    run: async (client: ClientCustom, message: Message, args) => {
        let user = message.mentions.users.first();
        let author = message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = await axios.get('https://nekos.life/api/v2/img/cuddle')
        const friendlyReaction = ['OwO', 'UwU', 'awoo', ':3', '^~^'];
        let suffix = friendlyReaction[Math.floor((Math.random() * friendlyReaction.length))];
        const embed = new RichEmbed().setColor(roleColor).setImage(data.data.url).setDescription(` ${suffix} ${user}, \`${author.username}\` se s tebou mazlí `).setFooter('Provided by nekos.life');
        message.channel.send(embed);
    }
}