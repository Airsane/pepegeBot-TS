import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed, Collection } from "discord.js";


module.exports = {
    name: "help",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        let commands = client.commands as Collection<any, any>;

        let embed = new RichEmbed().setTitle(":keyboard: Seznam všech příkazů").setColor(roleColor);
        let arr = commands.array();

        embed.addField("Info", arr.filter(a => a.category == "info").map(n => '`' + n.name + '`').toString());
        embed.addField("Image", arr.filter(a => a.category == "image").map(n => '`' + n.name + '`').toString());
        embed.addField("Fun", arr.filter(a => a.category == "fun").map(n => '`' + n.name + '`').toString());
        embed.addField("Moderation", arr.filter(a => a.category == "moderation").map(n => '`' + n.name + '`').toString());

        message.channel.send(embed);

    }
}