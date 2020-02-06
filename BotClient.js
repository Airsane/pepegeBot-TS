"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class DiscordTs {
    constructor() {
        this.client = new ClientCustom();
        this.client.commands = new discord_js_1.Collection();
        this.client.aliases = new discord_js_1.Collection();
        this.prefix = "-";
    }
    start() {
        console.log('Starting bot...');
        ["command"].forEach(handler => {
            require(`./handler/${handler}`)(this.client);
        });
        this.client.on('message', (message) => {
            if (message.author.bot)
                return;
            if (!message.content.startsWith(this.prefix))
                return;
            const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0)
                return;
            let command = this.client.commands.get(cmd);
            if (!command)
                command = this.client.commands.get(this.client.aliases.get(cmd));
            if (command)
                command.run(this.client, message, args);
        });
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
            this.client.user.setPresence({
                status: "online",
                game: {
                    name: "už chci být hotový",
                    type: "WATCHING"
                }
            });
        });
        this.client.login('NjUwMzc1NzIzNTU0NzAxMzEz.Xjh-hQ.Qc5UhINOJOLiqKhiJUcJYG7_V_Q');
    }
}
exports.DiscordTs = DiscordTs;
class ClientCustom extends discord_js_1.Client {
    getMember(message, toFind = "") {
        toFind = toFind.toLowerCase();
        let target = message.guild.members.get(toFind);
        if (!target && message.mentions.members)
            target = message.mentions.members.first();
        if (!target && toFind)
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                    member.user.tag.toLowerCase().includes(toFind);
            });
        if (!target)
            target = message.member;
        return target;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    }
}
exports.ClientCustom = ClientCustom;
