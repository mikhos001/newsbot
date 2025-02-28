# NewsBot

NewsBot is a Node.js application that generates funny news using the DeepSeek API and sends it to a Telegram channel at regular intervals.

## Features

- Generates random funny news using the DeepSeek API.
- Sends the generated news to a specified Telegram channel.
- Scheduled to run every 2 hour 10-22.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/newsbot.git
   cd newsbot
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys and other configuration:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file and replace the placeholder values with your actual API keys and configuration.

## Configuration

The `.env` file should contain the following variables:

```dotenv
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHANNEL_ID=your_telegram_channel_id
DEEPSEEK_API_URL=https://api.deepseek.com
DEEPSEEK_API_KEY=your_deepseek_api_key
OPENAI_API_KEY=your_openai_api_key
```

## Usage

To start the bot, run:

```bash
npm start
```

The bot will generate funny news and send it to the specified Telegram channel every hour.

