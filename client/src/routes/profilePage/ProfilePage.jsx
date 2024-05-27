import React from "react";
import "./ProfilePage.scss";
import List from "../../components/list/List";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Info</h1>
            <button>Update Profile</button>
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

      <div className="chatContainer"></div>
    </div>
  );
}

export default ProfilePage;
