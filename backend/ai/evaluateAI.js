const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function evaluateAnswer(question, answer) {

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