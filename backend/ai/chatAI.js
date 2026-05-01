const { getGroqClient } = require("./groqClient");

async function careerChat(message) {
  const groq = getGroqClient();

  if (!groq) {
    return "AI chat unavailable: GROQ_API_KEY is not configured";
  }

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a career assistant helping software developers"
      },
      {
        role: "user",
        content: message
      }
    ],
    model: "llama-3.1-8b-instant"
  });

  return response.choices[0].message.content;
}

module.exports = careerChat;