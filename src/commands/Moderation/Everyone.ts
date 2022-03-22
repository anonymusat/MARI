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
            'https://c.tenor.com/Vf6ZPQU3zMoAAAPo/marin-kitagawa-marin.mp4',
	    'https://c.tenor.com/gu0EZJfpXP8AAAPo/marin-kitagawa-my-dress-up-darling.mp4',
	    'https://c.tenor.com/LXLRCmwR9KIAAAPo/kitagawa-marin-marin-kitagawa.mp4',
	    'https://c.tenor.com/9aXyxmnYW7oAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
	    'https://c.tenor.com/Q7h_Uz-lf0YAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
	    'https://c.tenor.com/Z75HOpn46VgAAAPo/kitagawa-marin-marin-kitagawa.mp4',
	    'https://c.tenor.com/Y8xTSG60n4cAAAPo/my-dress-up-darling-my-dress-up-darling-gif.mp4',
	    'https://c.tenor.com/XyfPrGSZizsAAAPo/marin-kitagawa-marin.mp4'
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
        }*HE WANTS TO SAY SOMETHING*\n*@${M.sender.jid.split("@")[0]}*\n*READ QUOTED MESSAGE*\n*[TAGGED MAGICALLY]*`,
        undefined,
        undefined,
        M.groupMetadata?.participants.map((user) => user.jid)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).catch((reason: any) =>
        M.reply(`✖️ An error occurred, Reason: ${reason}`)
      ));
  };
}
    ];
    const random = stickers[Math.floor(Math.random() * stickers.length)];
    const term = joined.trim().split(" ");
    if (term[0] === "--s" || term[0] === "--sticker") {
      const sticker: any = await new Sticker(random, {
        pack: "READ QUOTED MESSAGE",
        author: "ASUNA🍺",
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
        }\n*READ QUOTED MESSAGE*\n*[TAGGED MAGICALLY]*`,
        undefined,
        undefined,
        M.groupMetadata?.participants.map((user) => user.jid)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).catch((reason: any) =>
        M.reply(`✖️ An error occurred, Reason: ${reason}`)
      ));
  };
}
