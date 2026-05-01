const { getGroqClient } = require("./groqClient");

async function generateInterviewQuestions(text) {
  const groq = getGroqClient();

  if (!groq) {
    return "AI interview generation unavailable: GROQ_API_KEY is not configured";
  }

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Based on this resume, generate 5 interview questions:

Resume:
${text}`
      }
    ],
    model: "llama-3.1-8b-instant"
  });

  return response.choices[0].message.content;
}

module.exports = generateInterviewQuestions;