import { OpenAI } from 'openai';
import {config} from "dotenv";
config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // Получите ключ: https://platform.openai.com/api-keys
  });


  export async function getImgageDalee(prompt) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        size: "1024x1024",
        quality: "standard",
        n: 1,
      });
      //console.log(response);
      return response.data[0].url
  }

