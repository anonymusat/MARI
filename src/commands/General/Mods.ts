import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*[UNMODERATED]*')
        const filteredMap = this.client.config.mods.map((mod) => this.client.getContact(mod)).filter((user) => user)
        let text = '๐ฅ *โด๐๐๐๐ก๐๐๐๐โด Moderators* ๐ฅ\n\n'
        filteredMap.forEach(
            (user, index) =>
                (text += `#${index + 1}\nโก *Username: ${
                    user.notify || user.vname || user.name || 'null'
                }*\n๐ *Contact: https://wa.me/+${user?.jid.split('@')[0]}*\n\n`)
        )
        text += `\nโกโด๐๐๐๐ก๐๐๐๐โดโก `
        return void M.reply(text)
    }
}
