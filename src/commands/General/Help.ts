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
            'https://c.tenor.com/Su-TFY-1OnoAAAPo/jshk-jibaku-shounen-hanako-kun.mp4',
	    'https://c.tenor.com/dx5sdhciKS8AAAPo/atsushi-nakajima-confused.mp4',
	    'https://c.tenor.com/qVX-FFJ5CmgAAAPo/anime-boy.mp4',
	    'https://c.tenor.com/nBIqU5BhJy8AAAPo/dazai-osamu-dazai.mp4',
	    'https://c.tenor.com/BGTXuJ-Q8uMAAAPo/free-anime.mp4',
	    'https://c.tenor.com/u0bS6ijzM9AAAAPo/ban-nanatsu-anime.mp4',
	    'https://c.tenor.com/X654BdOFY6wAAAPo/jjk.mp4',
	    'https://c.tenor.com/f9C16ymeFVYAAAPo/anime-rin.mp4',
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
  run = async (M: ISimplifiedMessage): Promise<void> => {
 const buttons = [
      {
        buttonId: "OWNER",
        buttonText: {displayText: `${this.client.config.prefix}mods` },
        type: 1,
      },
];
    await M.reply(buttons,MessageType.buttons);
  };
}
