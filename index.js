import { config } from "dotenv";
config();
import { getFunnyNews } from "./deepseek.js";
import { sendNewsToChannel } from "./telegram.js";
import { getImgageDalee } from "./dalee.js";
import cron from "node-cron";

const channelId = process.env.TELEGRAM_CHANNEL_ID;

async function main() {
  try {
    const news = await getFunnyNews();
    const image = await getImgageDalee(news);
    await sendNewsToChannel(channelId, news, image);
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

// Schedule the main function to run every 1 hour
cron.schedule('0 10-22/2 * * *', () => {
  console.log('Running scheduled task');
  main();
});

// Run the main function immediately on startup
// main();
