import { GoogleGenAI } from "@google/genai";
import { RaceEvent, Racer } from "../types";

// This service mimics an AI Steward analyzing the race data
export const generateRaceReport = async (event: RaceEvent, racers: Racer[]): Promise<string> => {
  
  if (!process.env.API_KEY) {
    console.warn("No API Key provided for Gemini. Returning mock report.");
    return mockReport(event);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a prompt based on the race data
    const raceDataString = JSON.stringify({
        eventName: event.name,
        location: event.location,
        results: event.entries.map(entry => {
            const racer = racers.find(r => r.id === entry.racerId);
            return {
                name: racer ? racer.name : 'Unknown Driver',
                position: entry.position,
                bestLap: entry.bestLap,
                gap: entry.gap || 'Winner'
            };
        })
    });

    const prompt = `
      Act as a professional motorsport commentator. 
      Analyze the following RC Racing JSON data and write a short, exciting 2-paragraph race summary.
      Highlight the winner's consistency and any close battles.
      
      Data: ${raceDataString}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Analysis unavailable.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return mockReport(event);
  }
};

const mockReport = (event: RaceEvent) => {
    return `OFFICIAL STEWARD REPORT: ${event.name} saw intense action at ${event.location}. The track conditions were ${event.trackCondition}, testing the drivers' setups. The Modified class demonstrated exceptional pace, with the leader maintaining a consistent 12-second lap average. Technical scrutiny confirmed all podium finishers were compliant with Federation standards.`;
}
