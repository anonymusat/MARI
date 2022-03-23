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
      aliases: ["all", "tagall", "ping","hey"],
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
	    'https://c.tenor.com/XQXzBqs3utEAAAAC/marin-kitagawa.gif',
	    'https://c.tenor.com/F-iYHvwyTtkAAAAC/marin-marin-smiling.gif',
	    'https://c.tenor.com/uCRClnnY4WUAAAAC/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.gif',
	    'https://c.tenor.com/uDWf9_1YdfgAAAAC/marin-kitagawa-marin.gif',
	    'https://c.tenor.com/mFX0gzBmX68AAAAC/marin-wink-marin-cool.gif',
    ];
    const random = stickers[Math.floor(Math.random() * stickers.length)];
    const term = joined.trim().split(" ");
    if (term[0] === "--s" || term[0] === "--sticker") {
      const sticker: any = await new Sticker(random, {
        pack: "READ QUOTED MESSAGE",
        author: "🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀",
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
          `*🎀 Group:${M.groupMetadata?.subject}*\n🎏 *Members: ${
	      members.length
        }*\n📢*Announcer: @${M.sender.jid.split("@")[0]} want's to say something*\n🧧 *Tags: INBUILT*`,
        undefined,
        undefined,
        M.groupMetadata?.participants.map((user) => user.jid)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).catch((reason: any) =>
        M.reply(`✖️ An error occurred, Reason: ${reason}`)
      ));
  };
}
