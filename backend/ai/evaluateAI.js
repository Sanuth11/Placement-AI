const { getGroqClient } = require("./groqClient");

async function evaluateAnswer(question, answer) {
  const groq = getGroqClient();

  if (!groq) {
    return "AI evaluation unavailable: GROQ_API_KEY is not configured";
  }

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Evaluate this interview answer:

Question:
${question}

Answer:
${answer}

Give:
1. Score out of 10
2. Feedback
3. Correct answer
4. Improvement tips`
      }
    ],
    model: "llama-3.1-8b-instant"
  });

  return response.choices[0].message.content;
}

module.exports = evaluateAnswer;