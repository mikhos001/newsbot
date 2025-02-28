import OpenAI from "openai";
import {config} from "dotenv";
import {textPrompt} from "./query.js";
config();

const openai = new OpenAI({
        baseURL: `${process.env.DEEPSEEK_API_URL}`,
        apiKey: `${process.env.DEEPSEEK_API_KEY}`
});

function getRandomPrompt() {
  if (textPrompt.length === 0) {
      throw new Error("Array is empty");
  }
  return textPrompt[Math.floor(Math.random() * textPrompt.length)];
}

export async function getFunnyNews() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: getRandomPrompt() }],
    model: "deepseek-chat",
  });
  return completion.choices[0].message.content;
  //console.log(completion.choices[0].message.content);
}

