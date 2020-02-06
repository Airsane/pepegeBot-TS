import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";


module.exports = {
    name: "uptime",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
       /* let user = message.mentions.users.first() || message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let embed = new RichEmbed().setColor(roleColor).setTitle(`Bot uptime`).addField('Uptime:', moment.duration(client.uptime).format('d [days], h [hours], m [minutes], s [seconds]', { trim: "small" }), true)

        message.channel.send(embed);*/
    }
}