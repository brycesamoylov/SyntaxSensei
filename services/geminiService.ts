
import { GoogleGenAI } from "@google/genai";

// Ensure API key is available in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getHint = async (questionPrompt: string, codeSnippet?: string): Promise<string> => {
  if (!API_KEY) {
    return "AI hints are currently unavailable.";
  }
  
  try {
    const prompt = `You are a helpful and concise Python programming tutor. A student is working on the following problem. 
    Question: "${questionPrompt}"
    ${codeSnippet ? `Code context:\n\`\`\`python\n${codeSnippet}\n\`\`\`` : ''}
    Provide a single, short sentence as a hint to guide the student towards the correct answer. Do not give away the solution directly.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5,
        maxOutputTokens: 50,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error fetching hint from Gemini:", error);
    return "Sorry, I couldn't generate a hint right now.";
  }
};
