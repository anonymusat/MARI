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
				caption: `ā” *ā“šššš”ššššā“* ā”\n\nš *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\nš *OFFICIAL BOT URL: https://github.com/DEVILL-MASCOT/marin* \n\n š\n`,
			}
		);
	};
}
