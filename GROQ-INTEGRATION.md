# GROQ Integration for SvaStudy

This guide explains how to set up and use GROQ's powerful LLM capabilities in the SvaStudy educational platform.

## What is GROQ?

GROQ is a high-performance AI inference engine that provides access to state-of-the-art language models like LLaMA 3. It offers:

- Fast response times
- High-quality language understanding
- Affordable pricing
- Educational-focused capabilities

## Why We're Using GROQ

For an educational platform like SvaStudy, having an AI assistant that can help students understand concepts, answer questions, and guide their learning is invaluable. GROQ provides:

1. Contextual understanding of educational content
2. Ability to explain complex topics in simple language
3. Personalized learning assistance
4. Immediate feedback to student questions

## Setup Instructions

Follow these steps to set up GROQ with your SvaStudy platform:

### 1. Create a GROQ Account

1. Visit [GROQ Console](https://console.groq.com/signup) and sign up for an account
2. Verify your email and log in to the dashboard

### 2. Get an API Key

1. In the GROQ dashboard, navigate to API Keys
2. Create a new API key (keep it secure and never share it)

### 3. Configure SvaStudy with Your API Key

You have two options:

**Option A: Use the setup script**
```bash
npm run setup-groq
```
When prompted, paste your GROQ API key.

**Option B: Manual setup**
1. Create a `.env.local` file in the root of your project
2. Add the following line:
```
GROQ_API_KEY=your_api_key_here
```

### 4. Install Dependencies and Start Development Server

```bash
npm install
npm run dev
```

## Using the GROQ Chatbot

Once set up, the GROQ-powered chatbot will appear in the bottom right corner of your SvaStudy platform. Students can:

1. Click the chatbot icon to open the chat window
2. Ask questions about the educational content
3. Get detailed explanations and guidance
4. Continue conversations with follow-up questions

## Customization Options

You can customize the GROQ integration by modifying:

- `src/app/components/GroqChatbot.tsx` - For UI changes
- `src/app/api/groq/route.ts` - For API handling changes
- Prompt context in the API calls to customize the assistant's personality

## Deployment Considerations

When deploying to production:

1. Ensure your GROQ API key is set as an environment variable in your hosting platform
2. Monitor API usage to optimize costs
3. Consider implementing rate limiting for high-traffic scenarios

## Troubleshooting

If you encounter issues:

1. Check your API key is correctly set in `.env.local`
2. Ensure you have internet connectivity
3. Check the browser console for any errors
4. Verify your GROQ account is active and has sufficient credits

## Support

If you need help with the GROQ integration:

- GROQ Documentation: [https://console.groq.com/docs](https://console.groq.com/docs)
- GROQ Support: [https://groq.com/contact](https://groq.com/contact)
- SvaStudy Documentation: See project README 