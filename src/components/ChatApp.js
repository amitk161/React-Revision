import React, { useState, useEffect } from 'react';

const ChatApp = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage or initialize to an empty array if none exist
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    // Update localStorage whenever messages change
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return; // Prevent sending empty messages

    const newMessage = {
      id: Date.now(), // Simple unique identifier for each message
      text: currentMessage,
      timestamp: new Date().toLocaleTimeString(), // Add a timestamp for fun
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage(''); // Reset input field after sending
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ marginBottom: '20px' }}>
        {messages.map((message) => (
          <div key={message.id}>
            <span>{message.timestamp}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
