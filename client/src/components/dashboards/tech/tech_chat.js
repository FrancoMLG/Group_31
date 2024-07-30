import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
<<<<<<< HEAD
import {Link, useNavigate} from "react-router-dom";
import React from "react";
=======
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
>>>>>>> 3e571f0ad405a829fe08be601d9f0b59aa6b4f25
import TechSideBar from "./tech_sidebar";
import DashHeader from "../dash_header";

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
<<<<<<< HEAD
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form class="chat-input-form">
            <input
              type="text"
              class="chat-input"
              required
              placeholder="Type here"
            />
            <button type="submit" class="button send-button">
              Send
            </button>
          </form>
=======
            <DashHeader headerText={"Chat"} />
		<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br><br></br><br></br>
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
>>>>>>> 3e571f0ad405a829fe08be601d9f0b59aa6b4f25
        </div>
      </div>
    </div>
  );
}
