import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";


module.exports = {
    name: "avatar",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
        let user = message.mentions.users.first() || message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let embed = new RichEmbed().setColor(roleColor).setTitle(`Avatar uživatele ${user.username}`).setImage(user.avatarURL);
        message.channel.send(embed);
    }
}