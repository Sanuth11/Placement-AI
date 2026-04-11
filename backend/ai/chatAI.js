const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function careerChat(message) {

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