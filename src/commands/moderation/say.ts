import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed, Collection } from "discord.js";


module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    run: async (client: ClientCustom, message: Message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Musíte být administrátor!");

        if (message.deletable) message.delete();


        if (args.length < 1)
            return message.reply('Musíš napsat text.').then((m:Message) => m.delete(5000));

        if (args[0].toLowerCase() === "embed") {
            let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
            const embed = new RichEmbed().setColor(roleColor).setDescription(args.slice(1).join(" ")).setTimestamp().setAuthor(message.author.username, message.author.displayAvatarURL).setFooter(client.user.username, client.user.displayAvatarURL);
            message.channel.send(embed);
        }
        else {
            message.channel.send(args.join(" "));
        }

    }
}