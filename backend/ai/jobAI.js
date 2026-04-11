const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function recommendJobs(resumeText) {

  try {

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
Based on this resume suggest:

1. Best Job Roles
2. Required Skills
3. Learning Roadmap

Resume:
${resumeText}
`
        }
      ]
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.log(error);
    return "Error generating job recommendations";
  }

}

module.exports = recommendJobs;