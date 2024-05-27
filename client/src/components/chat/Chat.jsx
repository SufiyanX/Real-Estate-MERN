import React from "react";
import "./Chat.scss";

function Chat() {
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

        <div className="message">
          <img
            src="https://st3.depositphotos.com/1135494/36086/i/450/depositphotos_360863948-stock-photo-white-background-studio-photograph-young.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipis... </p>
        </div>

        <div className="message">
          <img
            src="https://st3.depositphotos.com/1135494/36086/i/450/depositphotos_360863948-stock-photo-white-background-studio-photograph-young.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipis... </p>
        </div>
      </div>
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://st3.depositphotos.com/1135494/36086/i/450/depositphotos_360863948-stock-photo-white-background-studio-photograph-young.jpg"
              alt=""
            />
            John Doe
          </div>
          <span>x</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>

          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
          <div className="chatMessage own">
            <p>Loremnwd ncwibc wbiuw</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
