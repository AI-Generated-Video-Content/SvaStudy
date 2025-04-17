import { NextResponse } from 'next/server';

// Define types for the API request and response
type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type GroqRequest = {
  messages: Message[];
  context?: string;
};

export async function POST(request: Request) {
  try {
    const body: GroqRequest = await request.json();
    const { messages, context } = body;

    // Ensure there's at least one message
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      );
    }

    // Add the context as a system message if provided
    const conversationMessages = context
      ? [{ role: 'system', content: context }, ...messages]
      : messages;

    // GROQ API endpoint
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
    
    // Make request to GROQ API
    // Note: In a real implementation, you'd use your actual GROQ API key
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, // Use environment variable
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192', // Or your preferred GROQ model
        messages: conversationMessages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GROQ API error:', errorData);
      throw new Error(`GROQ API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the assistant's response
    const assistantResponse = data.choices[0]?.message?.content || 
      "I couldn't generate a response at this moment. Please try again.";

    return NextResponse.json({ text: assistantResponse });
    
  } catch (error) {
    console.error('Error in GROQ API route:', error);
    return NextResponse.json(
      { error: 'Failed to communicate with GROQ' },
      { status: 500 }
    );
  }
} 