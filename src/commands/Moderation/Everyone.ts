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
          `*🎀 Group:${M.groupMetadata?.subject}*\n🎏 *Members:${members.length
        }*\n📢*Announcer: @${M.sender.jid.split("@")[0]} want's to say something*\n🧧 *Tags: INBUILT*`,
        undefined,
        undefined,
        M.groupMetadata?.participants.map((user) => user.jid)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).catch((reason: any) =>
        M.reply(`✖️ An error occurred, Reason: ${reason}`)
      ));
	  interface metadata {
        mods: string[];
        admins: string[];
        others: string[];
      }
      const metadata: metadata = {
        mods: [],
        admins: [],
        others: [],
      };
      for (const i of members) {
        if (i.jid === M.sender.jid) continue;
        if (!this.client.config.mods?.includes(i.jid)) continue;
        metadata.mods.push(i.jid);
      }
      for (const a of members) {
        if (a.jid === M.sender.jid) continue;
        if (this.client.config.mods?.includes(a.jid)) continue;
        if (!a.isAdmin) continue;
        metadata.admins.push(a.jid);
      }
      for (const k of members) {
        if (k.jid === M.sender.jid) continue;
        if (this.client.config.mods?.includes(k.jid)) continue;
        if (k.isAdmin) continue;
        metadata.others.push(k.jid);
      }
      let text = `*🎀 Group: ${M.groupMetadata?.subject}*\n🎏 *Members: ${
        members.length
      }*\n📢 *Announcer: @${M.sender.jid.split("@")[0]}*\n🧧 *Tags:*`;
      if (metadata.mods.length > 0) {
        for (const Mods of metadata.mods) {
          text += `\n🏅 *@${Mods.split("@")[0]}*`;
        }
      }
     // text += `\n`;
      if (metadata.admins.length > 0) {
        text += `\n`;
        for (const admins of metadata.admins) {
          text += `\n👑 *@${admins.split("@")[0]}*`;
        }
      }
  };
}
