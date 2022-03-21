/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "marin",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/sr7BjZ_-StIAAAPo/marin-kitagawa.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴* ⚡\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/DEVILL-MASCOT/marin* \n\n 📒\n`,
			}
		);
	};
}
run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "help",
        buttonText: { displayText: `${this.client.config.prefix}help` },
        type: 1,
      };
    await M.reply(buttons, MessageType.buttons);
}
