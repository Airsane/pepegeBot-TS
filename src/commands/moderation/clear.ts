import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";


module.exports = {
    name: "clear",
    aliases: ["purge"],
    category: "moderation",
    run: async (client: ClientCustom, message: Message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Musíš být administrátor!");

        let amount = args[0];
        if (!amount || isNaN(amount) || parseInt(amount) < 1) {
            return message.channel.send("Musíte zadat číslo!");
        }

        await message.delete();

        let user = message.mentions.users.first();

        let messages = await message.channel.fetchMessages({ limit: 100 });
        let messagesArr = messages.array();
        if (user) {
            messages = messages.filter((m) => m.author.id === user.id);
        }
        if (messagesArr.length > amount) {
            messagesArr.length = parseInt(amount, 10);
        }
        messagesArr = messagesArr.filter((m) => !m.pinned);
        amount++;

        message.channel.bulkDelete(messagesArr, true);

        let toDelete = null;

        if (user) {
            toDelete = await message.channel.send("Vymazáno " + amount + " zpráv uživatele " + user);
        } else {
            toDelete = await message.channel.send("Vymazáno " + amount + " zpráv");
        }

        setTimeout(function () {
            toDelete.delete();
        }, 2000);

    }
}