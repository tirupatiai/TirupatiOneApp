import React, { ReactNode, useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ChatBot } from '../ChatBot';
import { FiMessageSquare, FiX } from 'react-icons/fi';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      
      {/* ChatBot Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <div className="relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
              aria-label="Close chat"
            >
              <FiX className="h-5 w-5" />
            </button>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-80 h-[500px] flex flex-col">
              <div className="bg-indigo-600 text-white p-4">
                <h3 className="font-semibold">TirupatiOne Assistant</h3>
                <p className="text-xs text-indigo-100">How can I help you today?</p>
              </div>
              <div className="flex-1 overflow-auto">
                <ChatBot />
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowChat(true)}
            className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            aria-label="Open chat"
          >
            <FiMessageSquare className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};