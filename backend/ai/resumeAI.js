const { getGroqClient } = require("./groqClient");

const analyzeResume = async (resumeText) => {
  const groq = getGroqClient();

  if (!groq) {
    return "AI analysis unavailable: GROQ_API_KEY is not configured";
  }

  try {

    const response = await groq.chat.completions.create({

      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: `Analyze this resume and give:

ATS Score (0-100)
Strengths
Weaknesses
Suggestions

Resume:
${resumeText}`
        }
      ]

    });

    return response.choices[0].message.content;

  } catch (error) {

    console.log("AI ERROR:", error);

    return "AI analysis failed";

  }

};

module.exports = { analyzeResume };