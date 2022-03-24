import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ownerinfo',
            description: 'Displays info about ✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴.',
            category: 'general',
            usage: `${client.config.prefix}ownerinfo`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.pinimg.com/564x/e5/ab/cc/e5abcca9633085d2b54b31362017b9ec.jpg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hello  !🍃This is ✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴ , And here is the info about my owners talk with them nicely and dont forget to follow their instagram.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/+919574584820
Wa.me/+918130784851
⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/monarch21
📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/at.__010
https://instagram.com/Bts.bigghitofficial7
🕸𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢;
https://t.me/kim_Ayush
🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
>> https://discord.gg/Gkevahetaq <<
⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💘` }
        )
    }
}
