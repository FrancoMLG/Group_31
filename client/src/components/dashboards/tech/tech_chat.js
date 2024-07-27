import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import TechSideBar from "./tech_sidebar";

export default function TechChat() {
  const activeLinkId = "chat-link";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
	setMessages([...messages, { text: message }]);
    setMessage("");
	messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <TechSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
		<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className="chatMessage blue-bg-body-tertiary">
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef}/>
          </div>
		  <form class="chat-input-form">
		  <input type="text" class="chat-input" required placeholder="Type here"/>
		  <button type="submit" class="button send-button">Send</button>
		  </form>
        </div>
      </div>
    </div>
  );
}
