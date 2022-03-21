/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "everyone",
      description: "Tags all users in group chat",
      aliases: ["all", "tagall", "ping"],
      category: "moderation",
      usage: `${client.config.prefix}everyone`,
      adminOnly: true,
      baseXp: 20,
    });
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    const stickers = [
     "https://wallpapercave.com/w/wp6139612.jpg",
   		        "https://wallpapercave.com/w/wp8879925.jpg",
          		"https://wallpapercave.com/w/wp6139586.jpg",
          		"https://wallpapercave.com/wp/wp6139586.jpg",
         	     "https://wallpapercave.com/wp/wp10472356.png",
          		"https://wallpapercave.com/wp/wp10472348.jpg",
          		"https://wallpapercave.com/wp/wp8108753.jpg",
          		"https://wallpapercave.com/wp/wp10440387.jpg",
	  		"https://wallpapercave.com/wp/wp10440371.jpg",
			"https://wallpapercave.com/wp/wp9078688.jpg",
    ];
    const random = stickers[Math.floor(Math.random() * stickers.length)];
    const term = joined.trim().split(" ");
    if (term[0] === "--s" || term[0] === "--sticker") {
      const sticker: any = await new Sticker(random, {
        pack: "READ QUOTED MESSAGE",
        author: "✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴",
        quality: 90,
        type: "default",
        categories: ["🎊"],
      });
      return void (await M.reply(
        await sticker.build(),
        MessageType.sticker,
        Mimetype.webp,
        M.groupMetadata?.participants.map((user) => user.jid)
      ));
    } else
      return void (await M.reply(
        `${
          M.groupMetadata?.subject || "*EVERYONE*"
        }\n*TAGGER :*${M.sender.username}* \n*THE PERSON WANTS TO SAY SOMETHING*\n*[INBUILT TAG]*`,
        undefined,
        undefined,
        M.groupMetadata?.participants.map((user) => user.jid)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).catch((reason: any) =>
        M.reply(`✖️ An error occurred, Reason: ${reason}`)
      ));
  };
}
