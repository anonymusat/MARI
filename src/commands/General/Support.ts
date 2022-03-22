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
                `*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽𝘀*\n\n
                 *「ENJOY GROUP LINK 」*: https://chat.whatsapp.com/JdCxJkOzJn38TRYq5Q5evp\n\n
                 *「owner's number」*:https://wa.me//+918130784951 \n\n https://wa.me//+919574584820`,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/sr7BjZ_-StIAAAPo/marin-kitagawa.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )

        }
}
