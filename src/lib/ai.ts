import OpenAI from 'openai';
import getPrompt from './getPrompt';
import { ImageData } from '~/app/register/page';

const openai = new OpenAI();

export interface CompanyInfo {
  name: string;
  serviceType: string;
  description?: string;
  phone?: string;
  email: string;
  imageData: ImageData[];
}

export async function generateWebsiteConfig(companyInfo: CompanyInfo): Promise<object> {
  const prompt = getPrompt(companyInfo);

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const generatedContent = completion.choices[0]?.message.content?.trim();
    const response = generatedContent?.replace(/^\s*```json\s*|\s*```$/g, '');

    try {
      return JSON.parse(response!!);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      throw new Error('The generated content could not be parsed as JSON.');
    }
  } catch (error) {
    console.error('Error generating JSON configuration:', error);
    throw new Error('An error occurred while generating the JSON configuration.');
  }
}
