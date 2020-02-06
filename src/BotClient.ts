import { Message, Collection, Client, GuildMember } from "discord.js";

export class DiscordTs {
    private client: ClientCustom;
    private prefix: string;
    constructor() {
        this.client = new ClientCustom();
        this.client.commands = new Collection();
        this.client.aliases = new Collection();
        this.prefix = "-";
    }

    public start(): void {
        console.log('Starting bot...');


        ["command"].forEach(handler => {
            require(`./handler/${handler}`)(this.client);
        })

        this.client.on('message', (message: Message) => {
            if (message.author.bot) return;
            if (!message.content.startsWith(this.prefix)) return;

            const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0) return

            let command = this.client.commands.get(cmd);
            if (!command) command = this.client.commands.get(this.client.aliases.get(cmd));

            if (command) command.run(this.client, message, args);
        })


        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
            this.client.user.setPresence({
                status: "online",
                game: {
                    name: "už chci být hotový",
                    type: "WATCHING"
                }
            })
        })

        this.client.login('NjUwMzc1NzIzNTU0NzAxMzEz.Xjh-hQ.Qc5UhINOJOLiqKhiJUcJYG7_V_Q')
    }
}


export class ClientCustom extends Client {
    public commands: any;
    public aliases: any;

    public getMember(message: Message, toFind: string = ""): GuildMember {
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

    public formatDate(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    }
}
