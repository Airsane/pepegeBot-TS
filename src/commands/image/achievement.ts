import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
import * as superagent  from 'superagent';

module.exports = {
    name: "achievement",
    category:"image",
    run: async (client: ClientCustom, message: Message, args) => {
        if(args.length < 1)
            return
        const { body } = await superagent.get('https://www.minecraftskinstealer.com/achievement/a.php')
        .query({
            i: 1,
            h: 'Achievement Get!',
            t: args.join(" ")
        });
        message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }]});
    }
}