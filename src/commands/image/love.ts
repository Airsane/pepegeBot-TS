import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as Axios from "axios";
const axios = Axios.default;

module.exports = {
    name: "love",
    category:"image",
    run: async (client: ClientCustom, message: Message, args) => {
        let user = message.mentions.users.first();
        let user2 = message.mentions.users.array()[1] || message.author;
        let msg = await message.channel.send("Počkejte prosím..") as Message;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let data = await axios.get(encodeURI(`https://nekobot.xyz/api/imagegen?type=love&user1=${user.displayAvatarURL}&user2=${user2.displayAvatarURL}`));
        let embed = new RichEmbed().setColor(roleColor).setImage(data.data.message).setFooter('Provided by nekobot');
        msg.edit(embed);
    }
}