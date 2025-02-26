import OpenAI from "openai";
import {config} from "dotenv";
config();

const openai = new OpenAI({
        baseURL: `${process.env.DEEPSEEK_API_URL}`,
        apiKey: `${process.env.DEEPSEEK_API_KEY}`
});

export async function getFunnyNews() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Сгенерируй смешную новость ограничившись 200 символами" }],
    model: "deepseek-chat",
  });
  return completion.choices[0].message.content;
  //console.log(completion.choices[0].message.content);
}

