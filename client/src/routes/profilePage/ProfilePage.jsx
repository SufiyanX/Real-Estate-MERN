import React from "react";
import "./ProfilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Info</h1>
            <div>
              <button>Update Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className="info">
            <img
              src="https://st3.depositphotos.com/1135494/36086/i/450/depositphotos_360863948-stock-photo-white-background-studio-photograph-young.jpg"
              alt=""
            />
            <div className="userDetails">
              <span className="username">John Doe</span>
              <span className="mail">john@gmail.com</span>
            </div>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved Posts</h1>
          </div>
          <List />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
