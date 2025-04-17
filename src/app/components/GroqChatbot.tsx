"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaSpinner } from 'react-icons/fa';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const GroqChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your SvaStudy learning assistant powered by GROQ. How can I help you understand your educational material today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchGroqResponse = async (userMessage: string) => {
    try {
      setIsLoading(true);
      
      // In a production environment, you would call your API route that interfaces with GROQ
      const response = await fetch('/api/groq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: [
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: userMessage }
          ],
          context: "You are an educational assistant for SvaStudy, a platform for K-12 learning videos. Help students understand concepts, explain topics in simple terms, and guide their learning journey. Be encouraging, accurate, and age-appropriate."
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from GROQ API');
      }

      const data = await response.json();
      return data.text;
      
    } catch (error) {
      console.error('Error fetching from GROQ API:', error);
      return "I'm having trouble connecting to my knowledge base right now. Can you try asking something else or try again later?";
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback responses if API call fails
  const getFallbackResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello! I'm here to help with your learning journey. What subject are you studying?";
    } else if (lowerCaseMessage.includes('math') || lowerCaseMessage.includes('mathematics')) {
      return "Mathematics is fascinating! What specific topic are you working on? Algebra, geometry, calculus, or something else?";
    } else if (lowerCaseMessage.includes('science')) {
      return "Science helps us understand the world around us! Are you studying biology, chemistry, physics, or another branch of science?";
    } else if (lowerCaseMessage.includes('history')) {
      return "History connects us to our past! Which historical period or event would you like to learn about?";
    } else if (lowerCaseMessage.includes('english') || lowerCaseMessage.includes('literature')) {
      return "English and literature help us communicate and understand stories! Are you working on grammar, writing, or analyzing literature?";
    } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('understand')) {
      return "I'm here to help! Could you provide more details about what you're trying to understand?";
    } else {
      return "That's an interesting question! To help you better, could you tell me more about what you're studying and what specific aspects you'd like me to explain?";
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    try {
      // Try to get response from GROQ
      const groqResponse = await fetchGroqResponse(inputValue);
      
      const botResponse: Message = {
        id: messages.length + 2,
        text: groqResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error in chat flow:', error);
      
      // Use fallback response if GROQ fails
      const fallbackResponse: Message = {
        id: messages.length + 2,
        text: getFallbackResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatbot}
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open learning assistant"
      >
        <FaRobot className="text-xl" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 sm:w-96 h-96 sm:h-[32rem] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="mr-2" />
                <h3 className="font-medium">GROQ Learning Assistant</h3>
              </div>
              <button
                onClick={toggleChatbot}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close learning assistant"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 text-right ${
                      message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center">
                    <FaSpinner className="animate-spin text-purple-600 mr-2" />
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Ask about any subject..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GroqChatbot; 