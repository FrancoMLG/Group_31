import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import UserSideBar from "./user_sidebar";
import "./user_chat.css";

export default function UserChat() {
  const activeLinkId = "chat-link";

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
		  <form class="chat-input-form">
		  <input type="text" class="chat-input" required placeholder="Type here"/>
		  <button type="submit" class="button send-button">Send</button>
		  </form>
        </div>
      </div>
    </div>
  );
}
