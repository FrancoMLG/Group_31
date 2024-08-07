import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for chat messages
const ChatContext = createContext();

// Create a provider component to manage chat messages and their state
export function ChatProvider({ children }) {
  // State to store chat messages. Initialize with messages from localStorage if available.
  const [messages, setMessages] = useState(() => {
    // Retrieve saved messages from localStorage
    const savedMessages = localStorage.getItem('messages');
    // Parse and return saved messages if they exist, otherwise return an empty array
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  
  // Side effect to update localStorage whenever messages change
  useEffect(() => {
    // Convert messages array to a JSON string and save it in localStorage
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]); // Dependency array: effect runs whenever messages change

  // Function to add a new message to the messages state
  const addMessage = (message) => {
    // Get the current date and time for timestamp
    const now = new Date();
    const timestamp = now.toLocaleString();
    // Update the messages state by appending the new message
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Provide messages and addMessage function to context consumers
  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

// Use useContext hook to consume the ChatContext
export function useChat() {
  return useContext(ChatContext);
}