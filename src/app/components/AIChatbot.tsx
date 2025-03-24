"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your SvaStudy assistant. How can I help you with your learning today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Simple hardcoded responses
  const getBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello! How can I help with your studies today?";
    } else if (lowerCaseMessage.includes('math') || lowerCaseMessage.includes('mathematics')) {
      return "I can help with math! What specific topic are you studying - algebra, geometry, calculus?";
    } else if (lowerCaseMessage.includes('science')) {
      return "Science is fascinating! Are you interested in biology, chemistry, physics, or earth science?";
    } else if (lowerCaseMessage.includes('history')) {
      return "History is full of amazing stories! Which time period or civilization are you learning about?";
    } else if (lowerCaseMessage.includes('video')) {
      return "We have many educational videos available. What subject and grade level are you looking for?";
    } else if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Is there anything else you'd like to learn about?";
    } else {
      return "That's an interesting question! I'm still learning. Could you tell me more about what you're studying?";
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
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
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaRobot className="text-xl" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="mr-2" />
                <h3 className="font-medium">SvaStudy Assistant</h3>
              </div>
              <button
                onClick={toggleChatbot}
                className="text-white hover:text-gray-200 transition-colors"
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
                    className={`max-w-3/4 rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 text-right ${
                      message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot; 