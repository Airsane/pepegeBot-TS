import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed, Collection } from "discord.js";


module.exports = {
    name: "pool",
    category: "moderation",
    run: async (client: ClientCustom, message: Message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Musíte být administrátor!");

        if (message.deletable) message.delete();

            let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
            let embedMessage = new RichEmbed().setColor(roleColor).setFooter(`Anketa vytvořena uživatelem ${message.author.username}`).setDescription(args.join(' ')).setTitle(`Anketa`);
            let msg = await message.channel.send(embedMessage) as Message;
        
            await msg.react('✅')
            await msg.react('⛔')
        
    }
}