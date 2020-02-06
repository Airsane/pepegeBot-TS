import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";


module.exports = {
    name: "ping",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
        let msg = await message.channel.send('🏓 Pinging....') as Message;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let embed = new RichEmbed().setColor(roleColor).setTitle("🏓**PONG!**🏓").addField("Odezva bota:", `:hourglass_flowing_sand:${Math.floor(<any>msg.createdAt - <any>message.createdAt)} ms`, true).addField("Odezva API:", `:stopwatch:${Math.floor(client.ping)} ms`, true);
        msg.edit(embed);
    }
}