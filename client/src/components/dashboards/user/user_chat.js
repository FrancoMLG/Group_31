import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import UserSideBar from "./user_sidebar";
import "./user_chat.css";
import DashHeader from "../dash_header";
import { useChat } from '../ChatContext';

export default function UserChat() {
  const activeLinkId = "chat-link";
  const { messages, addMessage } = useChat();
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage({ text: message, type: 'user' });
    setMessage("");
	messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
            <DashHeader headerText={"Chat"} />
			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br><br></br><br></br>
			<div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chatMessage ${msg.type === 'tech' ? 'techMessage' : 'userMessage'}`}>
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef}/>
          </div>
		  <form id="chatForm" class="chat-input-form" onSubmit={handleSubmit}>
		  <input type="text" class="chat-input" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Type here"/> 
		  <button type="submit" class="button send-button">Send</button>
		  </form>
        </div>
      </div>
    </div>
  );
}