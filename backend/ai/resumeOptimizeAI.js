const { getGroqClient } = require("./groqClient");

async function optimizeResume(resumeText, jobDescription) {
  const groq = getGroqClient();

  if (!groq) {
    return "AI resume optimization unavailable: GROQ_API_KEY is not configured";
  }

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `
You are an ATS Resume Optimizer.

Given:

Resume:
${resumeText}

Job Description:
${jobDescription}

Provide:

1. Match Score (0-100)
2. Missing Skills
3. Resume Improvements
4. Suggested Resume Changes
5. Keywords to Add

Return structured response.
`
      }
    ]
  });

  return response.choices[0].message.content;
}

module.exports = optimizeResume;