import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*๐ฎ๐ฆ๐๐ฝ๐ฝ๐ผ๐ฟ๐ ๐๐ฟ๐ผ๐๐ฝ๐*\n\n
                 *ใENJOY GROUP LINK ใ*: https://chat.whatsapp.com/JdCxJkOzJn38TRYq5Q5evp\n
                 *ใowner's numberใ*:๐-1 https://wa.me//+918130784851\n\n๐-2 https://wa.me//+919574584820`,
           MessageType.text
        ))
        const n = [
            'https://i.pinimg.com/564x/e5/ab/cc/e5abcca9633085d2b54b31362017b9ec.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM๐ช\n` }
        )
 
        }
}
