import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import UserSideBar from "./user_sidebar";
import "./user_chat.css";
import DashHeader from "../dash_header";
import { useChat } from '../ChatContext';

	{/*Define the UserChat component*/}
export default function UserChat() {
	{/*Set the ID for the active link in the sidebar*/}
  const activeLinkId = "chat-link";
  
  {/*Destructure messages and addMessage function from chat context*/}
  const { messages, addMessage } = useChat();

	  {/*State to hold the current message input*/}
  const [message, setMessage] = useState("");

  {/*Ref to keep track of the end of the messages container for auto-scrolling*/}
  const messagesEndRef = useRef(null);
  
  {/*Handle form submission*/}
  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage({ text: message, type: 'user' });
    setMessage("");
	messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding"> {/*Overall container for the chat*/}
      <div className="row flex-grow-1">
        <div className="col-auto">
		
		{/*Render sidebar*/}
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
		
		{/*Main chat area column*/}
        <div className="col overflow-auto">
		
		{/*Render header*/}
            <DashHeader headerText={"Chat"} />
		  
		  {/*Empty space for layout adjustment*/}
			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br><br></br><br></br>
			
			{/*Container for displaying messages*/}
			<div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chatMessage ${msg.type === 'tech' ? 'techMessage' : 'userMessage'}`}>
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef}/>
          </div>
		  
		  {/*Form for submitting new messages*/}
		  <form id="chatForm" class="chat-input-form" onSubmit={handleSubmit}>
		  <input type="text" class="chat-input" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Type here"/> 
		  <button type="submit" class="button send-button">Send</button>
		  </form>
        </div>
      </div>
    </div>
  );
}