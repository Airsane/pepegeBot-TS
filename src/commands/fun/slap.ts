import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "pat",
    category:"fun",
    run: async (client: ClientCustom, message: Message, args) => {
        let user = message.mentions.users.first();
        let author = message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = await axios.get('https://nekos.life/api/v2/img/slap')
        const embed = new RichEmbed().setColor(roleColor).setImage(data.data.url).setDescription(` ${user}, \`${author.username}\` ti dal/a facku `).setFooter('Provided by nekos.life');
        message.channel.send(embed);
    }
}