import OpenAI from "openai";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

let openai: OpenAI | null = null;

function getOpenAI() {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }
    return openai;
}

export async function parseResume(file: Express.Multer.File) {
    try {
        const data = await pdf(file.buffer);
        const text = data.text;

        const response = await getOpenAI().chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `Extract structured resume data and return as JSON with this structure:
                    {
                        "name": "string",
                        "email": "string", 
                        "phone": "string",
                        "skills": ["string"],
                        "experience": [{"title": "string", "company": "string", "duration": "string"}],
                        "education": [{"degree": "string", "institution": "string", "year": "string"}],
                        "summary": "string"
                    }
                    Return only valid JSON, no additional text.`
                },
                {
                    role: "user",
                    content: text.substring(0, 10000) // Limit text length
                }
            ],
            response_format: { type: "json_object" }
        });

        // Safe access to content with proper null checking
        const content = response.choices[0]?.message?.content;

        if (!content) {
            throw new Error('No response content from OpenAI');
        }

        const resumeData = JSON.parse(content);
        const themeData = { theme: 'professional' }; // Default theme

        return { resumeData, themeData };
    } catch (error) {
        console.error('Error parsing resume:', error);
        throw new Error('Failed to parse PDF resume');
    }
}