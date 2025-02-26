import TelegramBot from "node-telegram-bot-api";

import {config} from "dotenv";
config();


const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

export async function sendNewsToChannel(channelId, news, image) {
  try {
    // await bot.sendMessage(channelId, news, image);
    // console.log('News sent to Telegram channel');
  //   const replyMarkup = {
  //     inline_keyboard: [
  //         [
  //             {
  //                 text: news,
  //                 web_app: { url: image },
  //             },
  //         ],
  //     ],
  // };
  bot.sendPhoto(channelId, image, {
      caption: news
      });
  console.log('News sent to Telegram channel');
  } catch (error) {
    console.error('Error sending news to Telegram:', error);
    throw error;
  }
}
