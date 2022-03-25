import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    emojis: any
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
        let rin = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `
            🤍 Konichiwa senpai 🤍
            ╭─「(づ￣ 3￣)づ」
            │⋊ ᴜꜱᴇʀ: *${M.sender.username}*
            │⋊ ɴᴀᴍᴇ: 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀
            │⋊ ᴘʀᴇꜰɪx: ${this.client.config.prefix}
            │⋊ ᴏᴡɴᴇʀ: <${this.client.config.prefix}mod>
	    |⋊ 𝕆𝕗𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕠𝕦𝕡: https://chat.whatsapp.com/JdCxJkOzJn38TRYq5Q5evp
            ╰────────────┈平和                            \n\n`
    //         const keys = Object.keys(categories)
    //         for (const key of keys)
    // // emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']

    //             text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
    //                 key
    //             ]
    //                 .map((command) => command.config?.command)
    //                 .join(', ')}\`\`\`\n\n`
    //         const key = parsedArgs.joined.toLowerCase()
    //         const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //         if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //         const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })

const weeb = [
    {title: 'Anime', rowId:"rowid1"},
    {title: 'AnimeQuote', rowId:"rowid1"},
    {title: 'Kitsune', rowId:"rowid2"},
    {title: 'GenshinCharacter', rowId:"rowid2"},
    {title: 'Neko', rowId:"rowid2"},
    {title: 'Manga', rowId:"rowid2"},
    {title: 'Pokemon', rowId:"rowid2"},
    {title: 'Rpaper', rowId:"rowid2"},
    {title: 'VTuber', rowId:"rowid2"},
    {title: 'Waifu', rowId:"rowid2"},
    {title: 'Animememe', rowId:"rowid2"},
    {title: 'Character', rowId:"rowid2"},
    {title: 'cosplay', rowId:"rowid2"},
    {title: 'Characterld', rowId:"rowid2"},
    {title: 'doge', rowId:"rowid2"},
    {title: 'sauce', rowId:"rowid2"},
    {title: 'wallpaper', rowId:"rowid2"},
    {title: 'megumin',rowId:"rowid2"}
   ]
   const utils = [
    {title: 'Blur', rowId:"rowid1"},
    {title: 'Wiki', rowId:"rowid1"},
    {title: 'Sticker', rowId:"rowid1"},
    {title: 'Subred', rowId:"rowid1"},
    {title: 'Getgif', rowId:"rowid1"},
    {title: 'Screenshot', rowId:"rowid1"},
    {title: 'Steal', rowId:"rowid1"},
    {title: 'Translate', rowId:"rowid1"},
    {title: 'toimg', rowId:"rowid1"},
    {title: 'Google',rowId:"rowid1"},
    {title: 'Circle',rowId:"rowid1"},
    {title: 'PINTEREST',rowId:"rowid1"},
    {title: 'caraamazon',rowId:"rowid1"},
    {title: 'Retrieve',rowId:"rowid1"},
    {title: 'tinyurl',rowId:"rowid1"}
   ]
   const dev = [
    {title: 'Ban', rowId:"rowid1"},
    {title: 'Eval', rowId:"rowid2"},
    {title: 'Join', rowId:"rowid2"},
    {title: 'Leave', rowId:"rowid2"},
    {title: 'Status', rowId:"rowid2"},
    {title: 'Unban', rowId:"rowid2"},
    {title: 'Enable',rowId:"rowid2"},
    {title: 'Disable',rowId:"rowid2"},
    {title: 'Broadcast',rowId:"rowid2"},
    {title: 'Setprefix',rowId:"rowid2"},
    {title: 'switch',rowId:"rowid2"}
   ]
   const idols = [
    {title: 'BTS', rowId:"rowid1"},
    {title: 'animeboy', rowId:"rowid1"},
    {title: 'bp', rowId:"rowid1"},
    {title: 'lumine',rowId:"rowid1"}
   ]
   const education = [
    {title: 'Calculator', rowId:"rowid1"},
    {title: 'Brainly', rowId:"rowid1"},
    {title: 'ip', rowId:"rowid1"},
    {title: 'Elements', rowId:"rowid2"},
    {title: 'Trivia', rowId:"rowid2"},
    {title: 'Urbandic', rowId:"rowid2"},
    {title: 'Crypto', rowId:"rowid2"},
    {title: 'kaoiweather',rowId:"rowid2"}
   ]
   const fun = [
    {title: 'Coupleforever',rowId:"rowid1"},
    {title: 'Utiezhfzen', rowId:"rowid1"},
    {title: 'Quote', rowId:"rowid2"},
    {title: 'Reactions', rowId:"rowid2"},
    {title: 'Trigger', rowId:"rowid2"},
    {title: 'Why', rowId:"rowid2"},
    {title: 'Trash', rowId:"rowid2"},
    {title: 'Ship', rowId:"rowid2"},
    {title: 'Wanted', rowId:"rowid2"},
    {title: 'RIP',rowId:"rowid2"},
    {title: 'joke',rowId:"rowid2"},
    {title: 'jail',rowId:"rowid2"},
    {title: 'Fact',rowId:"rowid2"}
   ]
   const general = [
       {title: 'Admins', rowId:"rowid2"},
       {title: 'info', rowId:"rowid2"},
       {title: 'Help', rowId:"rowid2"},
       {title: 'Mods', rowId:"rowid2"},
       {title: 'Profile', rowId:"rowid2"},
       {title: 'Rank', rowId:"rowid1"},
       {title: 'Exp', rowId:"rowid2"},
       {title: 'Invitelink', rowId:"rowid2"},
       {title: 'ownerinfo', rowId:"rowid2"},
       {title: 'Rules',rowId:"rowid2"},
       {title: 'Hi',rowId:"rowid2"},
       {title: 'hbd',rowId:"rowid2"},
       {title: 'Support',rowId:"rowid2"},
       {title: 'marin',rowId:"rowid2"},
       {title: 'Do-you-mean',rowId:"rowid2"},
       {title: 'Chat',rowId:"rowid2"}
    ]
    const media = [
        {title: 'play', rowId:"rowid2"},
        {title: 'spotify', rowId:"rowid2"},
        {title: 'iguser', rowId:"rowid1"},
        {title: 'ytaudio', rowId:"rowid2"},
        {title: 'ytsearch', rowId:"rowid2"},
        {title: 'ytvideo', rowId:"rowid2"},
        {title: 'tiktok', rowId:"rowid2"},
        {title: 'lyrics', rowId:"rowid2"},
        {title: 'tiktokuser', rowId:"rowid2"},
	{title: 'karaoke',rowId:"rowid2"}
   ]
   const games = [
    {title:'chess',rowId:"rowid1"}
]
   const moderation = [
    {title: 'Activate', rowId:"rowid1"},
    {title: 'Deactivate', rowId:"rowid2"},
    {title: 'Demote', rowId:"rowid2"},
    {title: 'Groupchange', rowId:"rowid2"},
    {title: 'Promote', rowId:"rowid2"},
    {title: 'Purge', rowId:"rowid2"},
    {title: 'Remove', rowId:"rowid2"},
    {title: 'Close', rowId:"rowid2"},
    {title: 'Open', rowId:"rowid2"},
    {title: 'Revoke', rowId:"rowid2"},
    {title: 'Add', rowId:"rowid2"},
    {title: 'Everyone',rowId:"rowid2"},
    {title: 'Delete',rowID:"rowid2"}
   ]

   const sections = [
                     {title: "fun🎈", rows: fun },
                     {title: "general 🌀", rows: general },
                     {title: "media 🎵", rows: media },
                     {title: "Games 🧿", rows: games },
                     {title: "moderation 👑", rows: moderation },
                     {title: "idols😎", rows: idols },
                     {title: "utils🎏", rows: utils },
                     {title: "weeb ✨", rows: weeb },
                     {title: "education 📚", rows: education },

]
const txt = '\n' +
    ' 🤍 ちょっとセクシーな女性 🤍\n' +
    '╭─「(づ￣ 3￣)づ」\n' +
    `│⋊ ᴜꜱᴇʀ: *${M.sender.username}*\n` +
    '│⋊ ɴᴀᴍᴇ:. 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀\n' +
    '│⋊ ᴘʀᴇꜰɪx: #\n' +
    '│⋊ ᴏᴡɴᴇʀ: <#mod>\n' +
    '╰────────────┈平和                            \n' +
    '\n' +
    '🎈*Fun*🎈\n' +
    '\n' +
    '• ``` coupleforever, quote, reactions, trigger, truth, chat, dare, fact, ship, rip, trash, wanted,why, joke, baka```\n' +
    '\n' +
    '🌀 *General*🌀\n' +
    '\n' +
    '• ```chat, admins, everyone, help, mods, profile, rank, exp, invitelink, rules, support, ownerinfo, hbd```\n' +
    '\n' +
    '🎵 *Media*🎵\n' +
    '\n' +
    '• ```iguser, karaoke, tiktok, tiktokuser, ig, play, spotify, take, ytaudio, ytsearch, ytvideo, lyrics```\n' +
    '\n' +
    ' 👑*Moderation* 👑\n' +
    '\n' +
    '• ```add, activate, deactivate, demote, groupchange, promote, purge, remove, close, open, revoke, delete ```\n' +
    '\n' +
    '🎭 *Games*🎭\n' +
    '\n' +
    '• ```chess```\n' +
    '\n' +
    '🎏 *Utils*🎏\n' +
    '\n' +
    '• ```blur, kitten, sticker, subred, getgif, screenshot, steal, translate, wikipedia```\n' +
    '\n' +
    '✨ *Weeb* ✨\n' +
    '\n' +
    '• ```anime, animequote, animechar, genshincharacter, husbando, loli, manga, pokemon, rpaper, vtuber, waifu, ameme, character, crossplay, haigusha, recommend, sauce, wallpaper```\n' +
    '\n' +
    '📚 *Educative*📚\n' +
    '\n' +
    '• ```calculator, covid, define, elements, github, urbandictionary, weather```\n' +
    '\n' +
    ' \n' +
    ' ──❅┈[🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 ᗷᗝ丅 ]┈❅───\n' +
    '┌────────────┈❅\n' +
    '│   🧨🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 \n'  +
    '│   ©️ MADE BY AYUSH\n' +
    '└────────────┈⁂\n' +
    '❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅\n'             +
    '🚀 *Note: Use #help <command_name> to view the command info*'
   const button:any = {
    buttonText: 'Help',
    description: txt,
    sections: sections,
    listType: 1
   }
this.client.sendMessage(M.from,button,MessageType.listMessage)
            // const keys = Object.keys(categories)
            // for (const key of keys)
            //     text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
            //         key
            //     ]
            //         .map((command) => command.config?.command)
            //         .join(', ')}\`\`\`\n\n`










                    //             return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
//             mimetype: Mimetype.gif,
//             caption: `${text}
//  ──❅┈[ ᖇᎥᑎ ᗷᗝ丅 ]┈❅───
// ┌────────────┈❅
// │   🧨 ᖇᎥᑎ
// │   ©️ Synthesized Infinity Botto
// └────────────┈⁂
// ❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
// 🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
//             )
//         }
    //     const key = parsedArgs.joined.toLowerCase()
    //     const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //     if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //     const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
    //     M.reply(
    //         `🎈 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
    //             state ? 'Disabled' : 'Available'
    //         }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
    //             command.config.aliases
    //                 ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
    //                 : ''
    //         }\n🎐 *Group Only:* ${this.client.util.capitalize(
    //             JSON.stringify(!command.config.dm ?? true)
    //         )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
    //     )
    // }

    this.emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']
}
}
