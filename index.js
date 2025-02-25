import { config } from "dotenv";
config();
import { getFunnyNews } from "./connect.js";
import { sendNewsToChannel } from "./telegram.js";
import cron from "node-cron";

const channelId = process.env.TELEGRAM_CHANNEL_ID;

async function main() {
  try {
    const news = await getFunnyNews();
    await sendNewsToChannel(channelId, news);
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

// Schedule the main function to run every 1 hour
cron.schedule('0 * * * *', () => {
  console.log('Running scheduled task');
  main();
});

// Run the main function immediately on startup
main();
