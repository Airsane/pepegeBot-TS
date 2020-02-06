import { ClientCustom } from "../../BotClient";
import { Message, RichEmbed } from "discord.js";
const frames = [
    '(-°□°)-  ┬─┬',
    '(╯°□°)╯    ]',
    '(╯°□°)╯  ︵  ┻━┻',
    '(╯°□°)╯       [',
    '(╯°□°)╯           ┬─┬'
];


module.exports = {
    name: "animtableflip",
    category: "fun",
    run: async (client: ClientCustom, message: Message, args) => {
        const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬') as Message;
        for (const frame of frames) {
            setTimeout(() => { }, 4000);
            await msg.edit(frame);
        }
        return message;
    }
}