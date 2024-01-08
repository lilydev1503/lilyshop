import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css'; // Import your CSS file for styling

const PopupChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBoxRef = useRef(null);
  const buttonRef = useRef(null);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  const toggleChat = () => {
    setShowChat(!showChat);

    if (!showChat) {
      // Clear messages when chat is reopened (optional)
      setMessages([]);
    }
  };

  const handleClickOutside = (e) => {
    if (!buttonRef.current.contains(e.target) && !chatBoxRef.current.contains(e.target)) {
      setShowChat(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      handleClickOutside(e);
    };

    if (showChat) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showChat]);

  return (
    <div className="popup-chat-container">
      <div ref={chatBoxRef} className={`popup-chat-box ${showChat ? 'chat-opened' : ''}`}>
        {showChat && (
          <>
            <div className="chat-header">
              <div>Chat with Us</div>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={handleInputChange}
              />
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </>
        )}
      </div>

      <button ref={buttonRef} className="open-chat-button" onClick={toggleChat}>
        {showChat ? 'Close Chat' : 'Open Chat'}
      </button>
    </div>
  );
};

export default PopupChatBox;
