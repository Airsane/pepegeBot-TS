import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";


module.exports = {
    name: "whois",
    aliases: ["userinfo", "user", "who"],
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {
        const member = client.getMember(message, args.join(" "));

        const joined = client.formatDate(member.joinedAt);
        const roles = member.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || "none";

        const created = client.formatDate(member.user.createdAt);


        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Informace o uživateli:', `**> Jméno:** ${member.displayName}
            **> Připojil se:** ${joined}
            **> Role:** ${roles}`, true)

            .addField('Informace o uživateli:', `**> ID:** ${member.user.id}
            **> Username**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Vytvořen**: ${created}`, true)

            .setTimestamp()

        if (member.user.presence.game)
            embed.addField('Momentálně hraje', `**> Název:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}