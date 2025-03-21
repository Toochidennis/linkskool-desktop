import React, { useEffect } from "react";
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
  useEffect(() => {
    const navContainer = document.createElement("nav");
    navContainer.style.position = "fixed";
    navContainer.style.top = "0";
    navContainer.style.left = "0";
    navContainer.style.width = "250px";
    navContainer.style.height = "100vh";
    navContainer.style.display = "flex";
    navContainer.style.flexDirection = "row"; // Side by side
    navContainer.style.boxShadow = "2px 0px 5px rgba(0, 0, 0, 0.1)";

    // Left Sidebar
    const leftSidebar = document.createElement("div");
    leftSidebar.style.width = "30%"; // Increase the width of the left sidebar
    leftSidebar.style.height = "100%";
    leftSidebar.style.backgroundColor = "blue";
    leftSidebar.style.display = "flex";
    leftSidebar.style.flexDirection = "column";
    leftSidebar.style.alignItems = "center";
    leftSidebar.style.justifyContent = "space-between"; // Space between top and bottom containers

    const topLeftContainer = document.createElement("div");
    topLeftContainer.style.display = "flex";
    topLeftContainer.style.flexDirection = "column";
    topLeftContainer.style.alignItems = "center";
    topLeftContainer.style.gap = "20px";
    topLeftContainer.style.marginTop = "150px"; // Add margin to create space at the top

    const bottomLeftContainer = document.createElement("div");
    bottomLeftContainer.style.display = "flex";
    bottomLeftContainer.style.flexDirection = "column";
    bottomLeftContainer.style.alignItems = "center";
    bottomLeftContainer.style.gap = "3px";
    bottomLeftContainer.style.marginBottom = "10px"; // Add margin to create space at the bottom

    leftSidebar.appendChild(topLeftContainer);
    leftSidebar.appendChild(bottomLeftContainer);

    // Right Sidebar
    const rightSidebar = document.createElement("div");
    rightSidebar.style.width = "75%"; // Increase the width of the right sidebar
    rightSidebar.style.height = "100%";
    rightSidebar.style.backgroundColor = "#D4DEFF";
    rightSidebar.style.display = "flex";
    rightSidebar.style.flexDirection = "column";
    rightSidebar.style.alignItems = "center";
    rightSidebar.style.justifyContent = "top";
    rightSidebar.style.gap = "20px";
    rightSidebar.style.padding = "50px"; // Add padding to create space around the contents

    // Wrapper for right sidebar content
    const rightSidebarContent = document.createElement("div");
    rightSidebarContent.style.marginTop = "70px"; // Add margin to push content down

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
      { icon: gamesIcon, alt: "games", sidebar: "right", text: "Games" },
    ]; // Icons for nav items

    menuItems.forEach((menuItem) => {
      const item = document.createElement("div");
      const img = document.createElement("img");
      img.src = menuItem.icon;
      img.alt = menuItem.alt;
      img.style.width = "18px";
      img.style.height = "18px";
      if (menuItem.sidebar === "right") {
        img.style.filter = "invert(1)"; // Make the icons black for right sidebar
        item.style.display = "flex"; // Use flexbox to align items horizontally
        item.style.alignItems = "center"; // Center align items vertically
        item.style.justifyContent = "left"; // Align items to the left
        item.appendChild(img); // Append the icon first
        if (menuItem.text) {
          const text = document.createElement("span");
          text.textContent = menuItem.text;
          text.style.marginLeft = "10px"; // Add some space between the icon and the text
          text.style.color = "black"; // Ensure the text color is black
          text.style.fontWeight =
            menuItem.text === "Explore" ? "bold" : "normal"; // Make the text bold for Explore
          text.style.fontSize = "12px"; // Reduce the font size
          item.appendChild(text); // Append the text after the icon
        }
      } else {
        item.style.display = "flex"; // Use flexbox to align items
        item.style.justifyContent = "center"; // Center align items horizontally
        item.style.alignItems = "left"; // Center align items vertically
        item.appendChild(img); // Append the icon for left sidebar items
      }
      item.style.cursor = "pointer";
      item.style.margin = "12px 0"; // Add margin to create space between icons

      if (menuItem.sidebar === "left") {
        if (menuItem.position === "top") {
          topLeftContainer.appendChild(item);
        } else {
          bottomLeftContainer.appendChild(item);
        }
      } else {
        if (menuItem.link) {
          const link = document.createElement("a");
          link.href = menuItem.link;
          link.appendChild(item);
          rightSidebarContent.appendChild(link);
        } else {
          rightSidebarContent.appendChild(item);
        }
      }
    });

    rightSidebar.appendChild(rightSidebarContent);

    // Append nav elements to body
    navContainer.appendChild(leftSidebar);
    navContainer.appendChild(rightSidebar);
    document.body.appendChild(navContainer);

    return () => {
      document.body.removeChild(navContainer);
    };
  }, []);

  return null;
};

export default Sidebar;
