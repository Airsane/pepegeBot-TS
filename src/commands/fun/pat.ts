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
        let data = await axios.get('https://nekos.life/api/v2/img/pat')
        const embed = new RichEmbed().setColor(roleColor).setImage(data.data.url).setDescription(` Hehe ${user}, \`${author.username}\` tě pohladil/a `).setFooter('Provided by nekos.life');
        message.channel.send(embed);
    }
}