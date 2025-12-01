import { GoogleGenAI, Type } from "@google/genai";
import { AIConceptResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBoothConcept = async (
  companyName: string,
  industry: string,
  goals: string
): Promise<AIConceptResponse> => {
  const prompt = `
    Erstelle ein kreatives, modernes Messebau-Konzept für folgendes Unternehmen:
    Name: ${companyName}
    Branche: ${industry}
    Ziele: ${goals}

    Das Konzept soll visuell beeindruckend und funktional sein.
    Antworte im JSON-Format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptName: { type: Type.STRING },
            tagline: { type: Type.STRING },
            description: { type: Type.STRING },
            designElements: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            engagementIdeas: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["conceptName", "tagline", "description", "designElements", "engagementIdeas"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIConceptResponse;
    }
    throw new Error("Keine Antwort von Gemini erhalten.");
  } catch (error) {
    console.error("Fehler bei der Generierung des Konzepts:", error);
    throw error;
  }
};