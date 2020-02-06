import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "holo",
    category:"image",
    run: async (client: ClientCustom, message: Message, args) => {
        let msg = await message.channel.send("Počkejte prosím..") as Message;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = await axios.get('https://nekos.life/api/v2/img/holo');
        let embed = new RichEmbed().setImage(data.data.url).setTitle(`Kawaiiii, isn't she? :heart:`).setFooter('Provided by nekos.life').setColor(roleColor);
        msg.edit(embed);
    }
}