import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'I can help you find the best hotels, restaurants, and more in Tirupati!',
        'Here are some popular options for you...',
        'Would you like more information about any specific service?',
        'I can also help with travel bookings and local attractions.',
      ];
      
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Tirupati Assistant</h2>
        <p className="text-sm text-gray-500">Ask me about places and services in Tirupati</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {message.sender === 'user' ? <FiUser /> : <FiMessageSquare />}
              </div>
              <div
                className={`ml-3 px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Tirupati..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
