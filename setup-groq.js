const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== GROQ LLM Integration Setup ===\n');
console.log('This script will help you set up GROQ for your SvaStudy platform.\n');
console.log('Steps:');
console.log('1. Create a GROQ account at https://console.groq.com/signup');
console.log('2. Generate an API key from the GROQ dashboard');
console.log('3. Enter the API key below\n');

rl.question('Enter your GROQ API key: ', (apiKey) => {
  if (!apiKey || apiKey.trim() === '') {
    console.log('\nNo API key entered. Setup canceled.');
    rl.close();
    return;
  }

  const envContent = `GROQ_API_KEY=${apiKey.trim()}\n`;

  // Create or update .env.local file
  fs.writeFile(path.join(process.cwd(), '.env.local'), envContent, (err) => {
    if (err) {
      console.error('\nError creating .env.local file:', err);
      rl.close();
      return;
    }

    console.log('\n✅ API key saved to .env.local file.');
    console.log('\n=== Next Steps ===');
    console.log('1. Install dependencies: npm install');
    console.log('2. Start your development server: npm run dev');
    console.log('3. The GROQ chatbot should now be available on your site!');
    console.log('\nNote: Keep your API key secret and never commit .env.local to your repository.');
    
    rl.close();
  });
}); 