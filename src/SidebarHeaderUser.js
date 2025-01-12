import React from "react";
import "./SidebarHeaderUser.css";

export default function SidebarHeaderUser() {
    let user = 'Mahir'
  return (
    <div className="sidebar-header-user">
      <div className="profile-container">
        <div className="profile-picture">
          {/* Just show the initials (fallback) */}
          <span>{user[0]}</span>
        </div>
      </div>

      <div className="user-text">
        <p>{user}</p> {/* Display username */}
      </div>
    </div>
  );
}
