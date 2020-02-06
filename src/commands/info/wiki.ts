import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
const snekfetch = require('snekfetch');

module.exports = {
    name: "wiki",
    category: "info",
    run: async (client: ClientCustom, message: Message, args) => {


        const query = args.join(' ');
        const { body } = await snekfetch
            .get('https://cs.wikipedia.org/w/api.php')
            .query({
                action: 'query',
                prop: 'extracts',
                format: 'json',
                titles: query,
                exintro: '',
                explaintext: '',
                redirects: '',
                formatversion: 2
            });
        if (body.query.pages[0].missing) return message.channel.send('Nic nenalezeno');

        let user = message.mentions.users.first() || message.author;
        let roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        let embed = new RichEmbed().setColor(roleColor).setTitle(body.query.pages[0].title)
            .setAuthor('Wikipedia', 'https://i.imgur.com/a4eeEhh.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        message.channel.send(embed);
    }
}