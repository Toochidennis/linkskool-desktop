import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import exploreIcon from "../../assets/img/icons8_dashboard_layout 1.png";
import cbtIcon from "../../assets/img/icons8_imac 1.png";
import ebooksIcon from "../../assets/img/icons8_books 1.png";
import portalIcon from "../../assets/img/icons8_school_1 1.png";
import videosIcon from "../../assets/img/icons8_video_playlist_1 1.png";
import globeIcon from "../../assets/img/icons8_globe_1 1.png";
import notificationIcon from "../../assets/img/icons8_notification_3 1.png";
import logoutIcon from "../../assets/img/icons8_Logout_Rounded 1.png";
import gamesIcon from "../../assets/img/Vector.png";
import settingsIcon from "../../assets/img/icons8_settings_1 1.png";


const Sidebar: React.FC = () => {
  const menuItems = [
    {
      icon: exploreIcon,
      alt: "Explore",
      sidebar: "right",
      link: "/",
      text: "Explore",
    },
    { icon: cbtIcon, alt: "Cbt", sidebar: "right", text: "CBT" },
    {
      icon: ebooksIcon,
      alt: "E-books",
      sidebar: "right",
      link: "/e-books",
      text: "E-Books",
    },
    {
      icon: videosIcon,
      alt: "Videos",
      sidebar: "right",
      link: "/videos",
      text: "Videos",
    },
    { icon: globeIcon, alt: "Profile", sidebar: "left", position: "top" },
    { icon: portalIcon, alt: "portal", sidebar: "left", position: "top" },
    {
      icon: notificationIcon,
      alt: "notification",
      sidebar: "left",
      position: "bottom",
    },
    {
      icon: settingsIcon,
      alt: "Settings",
      sidebar: "left",
      position: "bottom",
    },
    { icon: logoutIcon, alt: "logout", sidebar: "left", position: "bottom" },
    { icon: gamesIcon, alt: "games", sidebar: "right", text: "Games", link: "/games" },
  ]; // Icons for nav items

  return (
    <nav className="sidebar-nav">
      <div className="left-sidebar">
        <div className="top-left-container">
          {menuItems
            .filter((item) => item.sidebar === "left" && item.position === "top")
            .map((menuItem, index) => (
              <div className="sidebar-item" key={index}>
                <img
                  src={menuItem.icon}
                  alt={menuItem.alt}
                  className="sidebar-icon"
                />
              </div>
            ))}
        </div>
        <div className="bottom-left-container">
          {menuItems
            .filter(
              (item) => item.sidebar === "left" && item.position === "bottom"
            )
            .map((menuItem, index) => (
              <div className="sidebar-item" key={index}>
                <img
                  src={menuItem.icon}
                  alt={menuItem.alt}
                  className="sidebar-icon"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="right-sidebar">
        <div className="right-sidebar-content">
          {menuItems
            .filter((item) => item.sidebar === "right")
            .map((menuItem, index) => (
              <Link to={menuItem.link || "#"} key={index}>
                <div className="sidebar-item right-sidebar-item">
                  <img
                    src={menuItem.icon}
                    alt={menuItem.alt}
                    className="sidebar-icon right-sidebar-icon"
                  />
                  {menuItem.text && (
                    <span
                      className={`sidebar-text ${
                        menuItem.text === "Explore" ? "bold-text" : ""
                      }`}
                    >
                      {menuItem.text}
                    </span>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
