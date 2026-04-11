const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function generateInterviewQuestions(text) {

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