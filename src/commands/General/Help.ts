import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h','menu','panel']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            'https://c.tenor.com/Vf6ZPQU3zMoAAAPo/marin-kitagawa-marin.mp4',
	    'https://c.tenor.com/gu0EZJfpXP8AAAPo/marin-kitagawa-my-dress-up-darling.mp4',
	    'https://c.tenor.com/LXLRCmwR9KIAAAPo/kitagawa-marin-marin-kitagawa.mp4',
	    'https://c.tenor.com/9aXyxmnYW7oAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
	    'https://c.tenor.com/Q7h_Uz-lf0YAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
	    'https://c.tenor.com/Z75HOpn46VgAAAPo/kitagawa-marin-marin-kitagawa.mp4',
	    'https://c.tenor.com/Y8xTSG60n4cAAAPo/my-dress-up-darling-my-dress-up-darling-gif.mp4',
	    'https://c.tenor.com/XyfPrGSZizsAAAPo/marin-kitagawa-marin.mp4',
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
	if (!parsedArgs.joined) {
			const commands = this.handler.commands.keys();
			const categories: { [key: string]: ICommand[] } = {};
			for (const command of commands) {
				const info = this.handler.commands.get(command);
				if (!command) continue;
				if (!info?.config?.category || info.config.category === "dev") continue;
				if (
					!info?.config?.category ||
					(info.config.category === "nsfw" &&
						!(await this.client.getGroupData(M.from)).nsfw)
				)
					continue;
				if (Object.keys(categories).includes(info.config.category))
					categories[info.config.category].push(info);
				else {
					categories[info.config.category] = [];
					categories[info.config.category].push(info);
				}
			}
            let text = `
╭─「o(*￣︶￣*)o」
│⋊ 𝕌𝕤𝕖𝕣: *${M.sender.username }*
│⋊ ℕ𝕒𝕞𝕖: ✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴
│⋊ ℙ𝕣𝕖𝕗𝕚𝕩: ${this.client.config.prefix}
│⋊ 𝕆𝕨𝕟𝕖𝕣: ${this.client.config.prefix}mods>
│⋊ 𝕆𝕗𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕠𝕦𝕡: https://chat.whatsapp.com/E5CwW1dAXjRKE3XuLXxF8J
╰────────────┈平和                            \n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
              	text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}*\n❐ \`\`\`${categories[key]
                    .map((command) => command.config?.command)
                    .join(', ')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text} 
 ──❅┈[ LUCIFER BOT ]┈❅───
┌────────────┈❅
│  ❄ ✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴ 
│  ©️ MADE BY AYUSH
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase();
		const command =this.handler.commands.get(key) || this.handler.aliases.get(key);
		if (!command) return void M.reply(`No Command of Alias Found | "${key}"`);
		 const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `*📗 Command:* ${this.client.util.capitalize(command.config?.command)}\n🎗️ *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n🀄 *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases && command.config.command !== 'react'
                    ? `\n🍥 *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🃏 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n📘 *Usage:* ${command.config?.usage || ''}\n\n📙 *Description:* ${command.config?.description || ''}`
		);
	};
	emojis = ['❄️', '❄️', '❄️', '❄️', '❄️', '❄️', '❄️', '❄️', '❄️', '❄️', '❄️']
}
